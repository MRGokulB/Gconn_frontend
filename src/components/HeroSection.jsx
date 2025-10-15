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
    { title: "About", info: "Information about the institute." },
    // { title: "Divisions", info: "Various divisions and departments." },
    { title: "Academics", info: "Courses, programs, and academics." },
    { title: "Admissions", info: "Admission process and criteria." },
    { title: "Research", info: "Research activities and industry collaborations." },
    { title: "Career", info: "Career opportunities and placements." },
    { title: "Resources", info: "Student resources and facilities." },
    { title: "Contact Us", info: "Contact details and location." },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to convert title to id (lowercase + replace spaces & & with -)
  const getId = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');

  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />

          {/* Top black overlay */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none rounded-t-md"></div>

          {/* Bottom black overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-b-md"></div>
        </div>
      ))}

      {/* Top-left horizontal menu (inside image) */}
      <div className="absolute top-4 left-[3.5%] flex gap-6 z-10">
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
            <div className="flex items-center gap-1 text-gray-300 hover:text-gray-100 transition font-semibold">
              <span>{item.title}</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Hover info */}
            {hoveredIndex === index && (
              <div className="absolute top-full left-0 mt-2 bg-white/90 text-gray-800 p-3 rounded-md shadow-md w-60 text-center">
                {item.info}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
