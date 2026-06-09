import React, { useEffect, useState } from "react";
import Banner1 from "../../public/College Building.jpg";
import Banner2 from "../../public/College Building.jpg";
import Banner3 from "../../public/College Building.jpg";
import Banner4 from "../../public/College Building.jpg";

import ImportantLinks from "../components/ImportantLinks";

const images = [Banner1, Banner2, Banner3, Banner4];

// Animation class list
const animations = [
  "animate-fade",
  "animate-zoom",
  "animate-slideLeft",
  "animate-slideRight",
  "animate-rotate",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("animate-fade");

  // Auto image change logic
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % images.length;
      const randomAnim =
        animations[Math.floor(Math.random() * animations.length)];
      setIndex(next);
      setAnim(randomAnim);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full">


      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side - Important Links */}
          <ImportantLinks />

          {/* Right side - Image slider */}
          <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl border">
            <img
              src={images[index]}
              alt="University Banner"
              className={`w-full h-full object-cover ${anim}`}
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                महाराष्ट्र आरोग्य विज्ञान विद्यापीठ
              </h1>
              <p className="text-lg lg:text-xl mb-6">
                समर्पित शिक्षा और उत्कृष्ट स्वास्थ्य विज्ञान के लिए
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium">
                  अधिक जानें
                </button>
                <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium">
                  संपर्क
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}