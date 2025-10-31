import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { title: "About", info: "Learn about our institution and values" },
    // { title: "Divisions", info: "Various divisions and departments." },
    { title: "Academics", info: "B.Sc. Nursing programs and curriculum" },
    { title: "Admissions", info: "Eligibility criteria and admission process" },
    { title: "Research", info: "Innovation and research initiatives" },
    { title: "Resources", info: "Campus facilities and learning resources" },
    { title: "Contact Us", info: "Get in touch with us" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getId = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');

  return (
    <section className="relative  w-full h-[600px] mt-4 overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[96%] h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />

          {/* Professional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent rounded-2xl"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Excellence in <span className="text-emerald-400">Nursing Education</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed">
                Empowering future healthcare leaders through compassionate care and evidence-based practice
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Top navigation menu */}
      <div className="absolute top-6 left-[2%] right-[2%] z-20">
        <div className="flex justify-center">
          <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg px-6 py-3">
            <div className="flex flex-wrap justify-center gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    const section = document.getElementById(getId(item.title));
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm">
                    <span>{item.title}</span>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  {/* Hover tooltip */}
                  {hoveredIndex === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-xl w-48 text-center text-xs z-30">
                      <p>{item.info}</p>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-emerald-500'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick stats overlay - bottom right */}
      <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 hidden lg:block">
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-xs text-slate-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">15+</div>
            <div className="text-xs text-slate-600">Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">INC</div>
            <div className="text-xs text-slate-600">Recognized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;