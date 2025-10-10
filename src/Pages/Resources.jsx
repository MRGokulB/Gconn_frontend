import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    },

    {
      title: "Library",
      description: `The library is fully computerized with WiFi connection. Students can access PUBMED, MEDLINE etc. Adequate textbooks and journals in hard copies are catalogued. Students can access the central library for reference and research work.`,
      image: Library,
    },

    {
      title: "Boys Common Room",
      description:
        "A comfortable space for male students to relax, study, and interact after lectures. Equipped with seating, ventilation, and recreational amenities.",
      image: BoysRoom,
    },
    {
      title: "Girls Common Room",
      description:
        "A safe and private area for female students to unwind, study, and engage in informal discussions during breaks.",
      image: GirlsRoom,
    },
    {
      title: "Community Health Nursing Lab",
      description:
        "Designed to help students practice and understand community health programs, family surveys, and public health awareness activities.",
      image: CommunityHealth,
    },
    {
      title: "Computer Lab",
      description:
        "Modern computer lab equipped with updated systems and internet access, supporting students in nursing research, digital learning, and documentation work.",
      image: ComputerLab,
    },
    {
      title: "Hostel Building",
      description:
        "Well-structured hostel providing a safe, clean, and comfortable living environment for both male and female nursing students within the campus.",
      image: Hostel,
    },
    {
      title: "Nutrition Lab",
      description:
        "Fully equipped lab for studying diet planning, food preparation, and nutritional analysis to understand the role of diet in patient health.",
      image: Nutrition,
    },
    {
      title: "OB-GYN Nursing Lab",
      description:
        "Specialized lab focusing on maternal and child health, where students learn about childbirth, pregnancy care, and neonatal nursing procedures.",
      image: ObGyLab,
    },
    {
      title: "Pre-Clinical Science Lab",
      description:
        "Equipped for practical sessions in anatomy, physiology, and microbiology to give students foundational scientific understanding.",
      image: Preclinical,
    },
    {
      title: "Reading Hall",
      description:
        "A peaceful study environment designed for students to read, revise, and prepare for examinations with minimal distractions.",
      image: ReadingHall,
    },
    {
      title: "General Facilities",
      description: `• Infrastructure and Physical Assets
    • Separate college building
    • Constructed ground plus two floor building
    • Separate nursing hostel for girls & boys`,
      image: null,
    },
    {
      title: "Class Rooms",
      description:
        "Well ventilated, adequate space with advanced teaching learning materials.",
      image: null,
    },
    {
      title: "Medical Facility",
      description: `Dr. Shankarrao Chavan Medical College and Hospital Vishnupuri Nanded.
Medical facility in the campus, as well as beyond is provided by a 1080 bedded parent hospital provides rich hands-on practical experience to the students and free medical consultancy to its students. For more information, visit www.drscgmchnanded.com`,
      image: null,
    },
    {
      title: "Green Campus",
      description: `Green Practice – A bold initiative to control environmental pollution and to create a healthy ambience in and around. Students and faculties use bicycles/foot walk and maintain a plastic-free environment. Paperless office is emphasized using primarily digital documents.`,
      image: null,
    },
    {
      title: "Sports Complex",
      description: "Sports Complex has Synthetic Athletics Track & ground.",
      image: null,
    },
    {
      title: "Community Training",
      description: `College has its own community health centres RHTC, Sonkhed & Tuppa and UHTC in Shivajinagar. Students acquire special skills in providing primary health care, preventive services, and promoting health services to the community.`,
      image: null,
    },
    {
      title: "Laboratories",
      description: `Well-equipped labs: fundamental lab, Nutrition lab, Community lab, Paediatric lab, OB-GYN Lab, Medical Surgical lab, Computer lab, A.V. Aids lab with net connections.`,
      image: null,
    },
    {
      title: "Nursing Skill Lab",
      description: `The Nursing Skills Lab is a learning lab for students to build and test their nursing skills from assessment, procedures, maternal, paediatric and infant nursing care, to critical thinking simulations.`,
      image: null,
    },
    {
      title: "Skills Training Lab",
      description: `Mock-up hospital space with nurses’ station, crash cart, medication cart, EKG machine, and clinical equipment. Students practice using low and mid-fidelity adult, paediatric and infant manikins.`,
      image: null,
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

  return (
    <div className="w-full bg-gray-50 py-10 px-6 md:px-12 min-h-[600px]">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Facilities
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 min-h-[500px]">
        {/* Left Text Section */}
        <div
          className={`md:w-1/2 space-y-4 transition-all duration-500 ${
            !current.image
              ? "flex items-center justify-center text-center min-h-[500px]"
              : ""
          }`}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              {current.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
              {current.description}
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex items-center justify-center relative min-h-[500px]">
          {current.image && (
            <img
              src={current.image}
              alt={current.title}
              className="w-[95%] h-[450px] md:h-[500px] object-cover shadow-lg transition-all duration-500"
            />
          )}

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 text-gray-800 hover:scale-110 transition"
          >
            <ChevronLeft size={38} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 text-gray-800 hover:scale-110 transition"
          >
            <ChevronRight size={38} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
