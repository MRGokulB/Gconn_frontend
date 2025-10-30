import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your existing imports
const Cpd1 = "/assets/Events/Continuous Professional Development Program/CPDP1.jpeg";
const Cpd2 = "/assets/Events/Continuous Professional Development Program/CPDP2.jpeg";
const Cpd3 = "/assets/Events/Continuous Professional Development Program/CPDP3.jpeg";
const Cpd4 = "/assets/Events/Continuous Professional Development Program/CPDP4.jpeg";
const Cpd5 = "/assets/Events/Continuous Professional Development Program/CPDP5.jpeg";
const Cpd6 = "/assets/Events/Continuous Professional Development Program/CPDP6.jpeg";
const Cpd7 = "/assets/Events/Continuous Professional Development Program/CPDP7.jpeg";
const Cpd8 = "/assets/Events/Continuous Professional Development Program/CPDP8.jpeg";
const Cpd9 = "/assets/Events/Continuous Professional Development Program/CPDP9.jpeg";
const Cpd10 = "/assets/Events/Continuous Professional Development Program/CPDP10.jpeg";
const Cpd11 = "/assets/Events/Continuous Professional Development Program/CPDP11.jpeg";
const Cpd12 = "/assets/Events/Continuous Professional Development Program/CPDP12.jpeg";

const EDU1 = "/assets/Events/Educational Visits/RPH.jpeg";
const EDU2 = "/assets/Events/Educational Visits/Visit to Biomedical Waste Treatment Plant.jpeg";
const EDU3 = "/assets/Events/Educational Visits/Visit to Old age Home.jpeg";
const EDU4 = "/assets/Events/Educational Visits/Visit to Old age Home1.jpeg";
const EDU5 = "/assets/Events/Educational Visits/Visit to Sub Centre Kakandi.jpeg";

const RMH1 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH1.jpeg";
const RMH2 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH2.jpeg";
const RMH3 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH3.jpeg";
const RMH4 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH4.jpeg";
const RMH5 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH5.jpeg";
const RMH6 = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH6.jpeg";
const RMHV = "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMHV.mp4";

const RolePlay = "/assets/Events/Role Play/PlayRole.mp4";
const FireDrill = "/assets/Events/Fire Drill/Live Fire Drill - Situation ward fire.mp4";

const Events = () => {
  const events = [
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd1,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd2,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd3,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd4,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd5,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd6,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd7,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd8,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd9,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd10,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd11,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
      src: Cpd12,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visits to hospitals and healthcare institutions for practical learning.",
      src: EDU1,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Biomedical Waste Treatment Plant for learning sustainable healthcare practices.",
      src: EDU2,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Old age Home - Community engagement and elderly care experience.",
      src: EDU3,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Old age Home - Community engagement and elderly care experience.",
      src: EDU4,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Sub Centre Kakandi for primary healthcare exposure.",
      src: EDU5,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH1,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH2,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH3,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH4,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH5,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMH6,
    },
    {
      type: "video",
      title: "Regional Mental Hospital Yerwada, Pune Posting",
      description: "Practical exposure and training in psychiatric nursing care and mental health services.",
      src: RMHV,
    },
    {
      type: "video",
      title: "Role Play Activities",
      description: "Interactive role-playing sessions for clinical skill development and patient communication.",
      src: RolePlay,
    },
    {
      type: "video",
      title: "Live Fire Drill Exercise",
      description: "Emergency preparedness and safety drills to prepare for hospital fire situations.",
      src: FireDrill,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
          Events & Programs
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive training programs, educational visits, and professional development activities
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Main Display Area */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Media Container */}
              <div className="relative bg-gray-50">
                {events[currentIndex].type === "image" ? (
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
                    <img
                      src={events[currentIndex].src}
                      alt={events[currentIndex].title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                    <video
                      src={events[currentIndex].src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 
                           bg-white/80 hover:bg-white backdrop-blur-sm
                           text-gray-800 p-2.5 sm:p-3 rounded-full transition-all shadow-lg
                           border border-gray-200 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 
                           bg-white/80 hover:bg-white backdrop-blur-sm
                           text-gray-800 p-2.5 sm:p-3 rounded-full transition-all shadow-lg
                           border border-gray-200 hover:scale-110"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                              bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg 
                              border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    {currentIndex + 1} / {events.length}
                  </span>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-4 sm:p-6 border-t border-gray-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {events[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {events[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="w-full lg:w-[280px]">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-1 h-4 bg-indigo-500 mr-2 rounded-full"></div>
                All Events ({events.length})
              </h3>
              
              <div className="flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-y-auto 
                            max-h-[140px] lg:max-h-[calc(100vh-280px)] 
                            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 
                            pb-2 lg:pb-0 pr-0 lg:pr-2">
                {events.map((event, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex-shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-full lg:h-[120px] 
                              rounded-lg overflow-hidden border-2 transition-all
                              hover:scale-105 hover:shadow-md relative group
                              ${i === currentIndex 
                                ? "border-indigo-500 shadow-lg ring-2 ring-indigo-200" 
                                : "border-gray-200 hover:border-indigo-300"}`}
                  >
                    {event.type === "image" ? (
                      <>
                        <img
                          src={event.src}
                          alt={`Thumbnail ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </>
                    ) : (
                      <>
                        <video
                          src={event.src}
                          className="w-full h-full object-cover"
                          muted
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <svg className="h-8 w-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l7-5-7-5z" />
                          </svg>
                        </div>
                      </>
                    )}
                    {i === currentIndex && (
                      <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full 
                                    ring-2 ring-white shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;