import React, { useState } from "react";
import { Award, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ResearchHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [ 
    {
      id: 1,
      img: "https://source.unsplash.com/800x600/?india,hospital,doctor",
      description: "Implementing research-driven approaches to improve patient care outcomes and safety protocols.",
      category: "Clinical Research",
      icon: Award,
    },
    {
      id: 2,
      img: "https://source.unsplash.com/800x600/?india,community,health",
      title: "Community Health Innovations",
      description: "Developing sustainable healthcare solutions for rural and underserved communities.",
      category: "Public Health",
      icon: Users,
    },
    {
      id: 3,
      img: "https://source.unsplash.com/800x600/?india,mental,health,nurse",
      title: "Mental Health Nursing Research",
      description: "Advancing psychiatric care through innovative therapeutic interventions and support systems.",
      category: "Mental Health",
      icon: TrendingUp,
    },
    {
      id: 4,
      img: "https://source.unsplash.com/800x600/?india,maternal,child,baby",
      title: "Maternal & Child Health Studies",
      description: "Research focused on improving maternal outcomes and neonatal care standards.",
      category: "Maternal Health",
      icon: Award,
    },
    {
      id: 5,
      img: "https://source.unsplash.com/800x600/?india,clinic,sterilization,infection",
      title: "Infection Control Protocols",
      description: "Developing advanced sterilization and hygiene practices to reduce hospital-acquired infections.",
      category: "Patient Safety",
      icon: TrendingUp,
    },
    {
      id: 6,
      img: "https://source.unsplash.com/800x600/?india,elderly,care,geriatrics",
      title: "Geriatric Care Excellence",
      description: "Research on age-specific nursing interventions and elderly patient management.",
      category: "Geriatric Care",
      icon: Users,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (activeIndex + i + highlights.length) % highlights.length;
      visible.push({ ...highlights[idx], position: i });
    }
    return visible;
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            Research & Innovation
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering nursing research that transforms healthcare delivery and patient outcomes
          </p>
        </div>

        {/* Desktop Carousel View */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-center gap-8 py-8">
            {getVisibleCards().map((highlight, idx) => {
              const IconComponent = highlight.icon;
              const isCenter = highlight.position === 0;
              
              return (
                <div
                  key={`${highlight.id}-${idx}`}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? 'scale-100 opacity-100 z-10'
                      : 'scale-90 opacity-60'
                  }`}
                  style={{ width: isCenter ? '400px' : '350px' }}
                >
                  <div className={`bg-white rounded-2xl border overflow-hidden shadow-lg ${
                    isCenter ? 'border-indigo-200 shadow-xl' : 'border-gray-200'
                  }`}>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={highlight.img}
                        alt={highlight.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-700 border border-indigo-200 shadow-sm">
                          {highlight.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {highlight.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 hover:border-indigo-300 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous research"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 hover:border-indigo-300 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next research"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'w-8 bg-indigo-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to research ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((highlight) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={highlight.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={highlight.img}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-700 border border-indigo-200 shadow-sm">
                      {highlight.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;