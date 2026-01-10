import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail, BookOpen, GraduationCap, Heart } from 'lucide-react';
import universityData from '../Data/universityData';




const getTitleIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('principal')) {
        return <GraduationCap className="h-4 w-4 mr-1.5" />;
    }
    return <BookOpen className="h-4 w-4 mr-1.5" />;
};

const FacultyPage = () => {
    const navigate = useNavigate();
    const [facultyMembers] = useState(universityData.facultyMembers);

    const handleCardClick = (member) => {
        navigate(`/faculty/${member.name}`, { state: { facultyMember: member } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide mb-3">
                                Our Faculty Members
                            </h1>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Meet our dedicated team of experienced nursing educators committed to excellence in healthcare education
                            </p>
                        </div>
                    </div>
                </div>

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {facultyMembers.map((member, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(member)}
                            className="group bg-white rounded-2xl border border-indigo-100 overflow-hidden cursor-pointer transform-gpu transition-all duration-300 ease-out  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:border-indigo-200"                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
                                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2">
                                    {member.name}
                                </h3>

                                <div className="flex items-center justify-center mb-3">
                                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-200 shadow-sm   transition">
                                        {getTitleIcon(member.title)}
                                        {member.title.split('•')[0].trim()}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600  font-medium text-center mb-4">
                                    {member.title.split('•')[1]?.trim() || 'Nursing Education'}
                                </p>

                                <p className="text-sm text-gray-700 line-clamp-3 text-center mb-4">
                                    {member.bio}
                                </p>

                                {member.email ? (
                                    <a
                                        href={`mailto:${member.email} `}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center text-sm text-blue-600 hover:text-indigo-700 font-medium transition-colors group/email"
                                    >
                                        <Mail className="h-4 w-4 mr-2 flex-shrink-0 group-hover/email:scale-110 transition-transform" />
                                        <span className="truncate">{member.email}</span>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-sm text-gray-400">
                                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span>Contact information unavailable</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FacultyPage;




