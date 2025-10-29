import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Building2, Wifi, Users, Microscope } from "lucide-react";

import BoysRoom from "../assets/Facalty_Images/RoomBoys.jpg";
import GirlsRoom from "../assets/Facalty_Images/RoomGirls.jpg";
import CommunityHealth from "../assets/Facalty_Images/CommunityHealthNursing.jpg";
import ComputerLab from "../assets/Facalty_Images/ComputerLab.jpg";
import Fundamental from "../assets/Facalty_Images/FundamentalNursing.jpg";
import Hostel from "../assets/Facalty_Images/HostelBuildig.jpg";
import Library from "../assets/Facalty_Images/Library.jpg";
import Nutrition from "../assets/Facalty_Images/NutritionLab.jpg";
import ObGyLab from "../assets/Facalty_Images/ObGyLab.jpg";
import Preclinical from "../assets/Facalty_Images/PreclinicalScienceLab.jpg";
import ReadingHall from "../assets/Facalty_Images/ReadingHall.jpg";

const Resources = () => {
  const data = [
    {
      title: "Fundamental Nursing Lab",
      description:
        "A practical lab where students learn the basic nursing skills such as patient care, bed making, and vital sign monitoring using mannequins and hospital setups.",
      image: Fundamental,
      icon: Microscope,
    },
    {
      title: "Library",
      description: `The library is fully computerized with WiFi connection. Students can access PUBMED, MEDLINE etc. Adequate textbooks and journals in hard copies are catalogued. Students can access the central library for reference and research work.`,
      image: Library,
      icon: Building2,
    },
    {
      title: "Boys Common Room",
      description:
        "A comfortable space for male students to relax, study, and interact after lectures. Equipped with seating, ventilation, and recreational amenities.",
      image: BoysRoom,
      icon: Users,
    },
    {
      title: "Girls Common Room",
      description:
        "A safe and private area for female students to unwind, study, and engage in informal discussions during breaks.",
      image: GirlsRoom,
      icon: Users,
    },
    {
      title: "Community Health Nursing Lab",
      description:
        "Designed to help students practice and understand community health programs, family surveys, and public health awareness activities.",
      image: CommunityHealth,
      icon: Microscope,
    },
    {
      title: "Computer Lab",
      description:
        "Modern computer lab equipped with updated systems and internet access, supporting students in nursing research, digital learning, and documentation work.",
      image: ComputerLab,
      icon: Wifi,
    },
    {
      title: "Hostel Building",
      description:
        "Well-structured hostel providing a safe, clean, and comfortable living environment for both male and female nursing students within the campus.",
      image: Hostel,
      icon: Building2,
    },
    {
      title: "Nutrition Lab",
      description:
        "Fully equipped lab for studying diet planning, food preparation, and nutritional analysis to understand the role of diet in patient health.",
      image: Nutrition,
      icon: Microscope,
    },
    {
      title: "OB-GYN Nursing Lab",
      description:
        "Specialized lab focusing on maternal and child health, where students learn about childbirth, pregnancy care, and neonatal nursing procedures.",
      image: ObGyLab,
      icon: Microscope,
    },
    {
      title: "Pre-Clinical Science Lab",
      description:
        "Equipped for practical sessions in anatomy, physiology, and microbiology to give students foundational scientific understanding.",
      image: Preclinical,
      icon: Microscope,
    },
    {
      title: "Reading Hall",
      description:
        "A peaceful study environment designed for students to read, revise, and prepare for examinations with minimal distractions.",
      image: ReadingHall,
      icon: Building2,
    },
    {
      title: "General Facilities",
      description: `• Infrastructure and Physical Assets
• Separate college building
• Constructed ground plus two floor building
• Separate nursing hostel for girls & boys`,
      image: null,
      icon: Building2,
    },
    {
      title: "Class Rooms",
      description:
        "Well ventilated, adequate space with advanced teaching learning materials.",
      image: null,
      icon: Building2,
    },
    {
      title: "Medical Facility",
      description: `Dr. Shankarrao Chavan Medical College and Hospital Vishnupuri Nanded.
Medical facility in the campus, as well as beyond is provided by a 1080 bedded parent hospital provides rich hands-on practical experience to the students and free medical consultancy to its students. For more information, visit www.drscgmchnanded.com`,
      image: null,
      icon: Building2,
    },
    {
      title: "Green Campus",
      description: `Green Practice – A bold initiative to control environmental pollution and to create a healthy ambience in and around. Students and faculties use bicycles/foot walk and maintain a plastic-free environment. Paperless office is emphasized using primarily digital documents.`,
      image: null,
      icon: Building2,
    },
    {
      title: "Sports Complex",
      description: "Sports Complex has Synthetic Athletics Track & ground.",
      image: null,
      icon: Building2,
    },
    {
      title: "Community Training",
      description: `College has its own community health centres RHTC, Sonkhed & Tuppa and UHTC in Shivajinagar. Students acquire special skills in providing primary health care, preventive services, and promoting health services to the community.`,
      image: null,
      icon: Building2,
    },
    {
      title: "Laboratories",
      description: `Well-equipped labs: fundamental lab, Nutrition lab, Community lab, Paediatric lab, OB-GYN Lab, Medical Surgical lab, Computer lab, A.V. Aids lab with net connections.`,
      image: null,
      icon: Microscope,
    },
    {
      title: "Nursing Skill Lab",
      description: `The Nursing Skills Lab is a learning lab for students to build and test their nursing skills from assessment, procedures, maternal, paediatric and infant nursing care, to critical thinking simulations.`,
      image: null,
      icon: Microscope,
    },
    {
      title: "Skills Training Lab",
      description: `Mock-up hospital space with nurses' station, crash cart, medication cart, EKG machine, and clinical equipment. Students practice using low and mid-fidelity adult, paediatric and infant manikins.`,
      image: null,
      icon: Microscope,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const current = data[currentIndex];
  const IconComponent = current.icon;

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            Campus Facilities
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities designed to provide comprehensive nursing education and training
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Text Section */}
            <div className={`lg:w-1/2 p-6 sm:p-8 lg:p-10 ${!current.image ? 'lg:w-full flex items-center justify-center' : ''}`}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {current.title}
                    </h2> 
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            {current.image && (
              <div className="lg:w-1/2 relative bg-gray-100">
                <div className="h-[400px] lg:h-full relative">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-all shadow-sm"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 mr-2" />
              <span className="hidden sm:inline text-sm font-medium text-gray-700">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {data.slice(Math.max(0, currentIndex - 2), Math.min(data.length, currentIndex + 3)).map((_, idx) => {
                const actualIndex = Math.max(0, currentIndex - 2) + idx;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setCurrentIndex(actualIndex)}
                    className={`h-2 rounded-full transition-all ${
                      actualIndex === currentIndex
                        ? 'w-8 bg-indigo-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-sm"
            >
              <span className="hidden sm:inline text-sm font-medium mr-2">Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Navigation Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {data.slice(0, 10).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                idx === currentIndex
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;