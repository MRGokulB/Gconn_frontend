// src/Pages/FacultyDetail.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const FacultyDetail = () => {
  const location = useLocation();
  const { facultyMember } = location.state;

  if (!facultyMember) {
    return <div>Faculty member not found</div>;
  }

  return (
    <div className="bg-white">
    
      {/* Faculty Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/3">
            <img
              src={facultyMember.image}
              alt={`${facultyMember.name} photo`}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900">{facultyMember.name}</h1>
            <p className="text-gray-600 mt-2">{facultyMember.title}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {facultyMember.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetail;