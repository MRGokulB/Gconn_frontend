import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Continuous Professional Development Program IMAGES
import Cpd1 from "../assets/Events/Continuous Professional Development Program/CPDP1.jpeg";
import Cpd2 from "../assets/Events/Continuous Professional Development Program/CPDP2.jpeg";
import Cpd3 from "../assets/Events/Continuous Professional Development Program/CPDP3.jpeg";
import Cpd4 from "../assets/Events/Continuous Professional Development Program/CPDP4.jpeg";
import Cpd5 from "../assets/Events/Continuous Professional Development Program/CPDP5.jpeg";
import Cpd6 from "../assets/Events/Continuous Professional Development Program/CPDP6.jpeg";
import Cpd7 from "../assets/Events/Continuous Professional Development Program/CPDP7.jpeg";
import Cpd8 from "../assets/Events/Continuous Professional Development Program/CPDP8.jpeg";
import Cpd9 from "../assets/Events/Continuous Professional Development Program/CPDP9.jpeg";
import Cpd10 from "../assets/Events/Continuous Professional Development Program/CPDP10.jpeg";
import Cpd11 from "../assets/Events/Continuous Professional Development Program/CPDP11.jpeg";
import Cpd12 from "../assets/Events/Continuous Professional Development Program/CPDP12.jpeg";

// Educational Visits IMAGES
import EDU1 from "../assets/Events/Educational Visits/RPH.jpeg";
import EDU2 from "../assets/Events/Educational Visits/Visit to Biomedical Waste Treatment Plant.jpeg";
import EDU3 from "../assets/Events/Educational Visits/Visit to Old age Home.jpeg";
import EDU4 from "../assets/Events/Educational Visits/Visit to Old age Home1.jpeg";
import EDU5 from "../assets/Events/Educational Visits/Visit to Sub Centre Kakandi.jpeg";

// Regional Mental Hospital Yelwarda, Pune Posting IMAGES
import RMH1 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH1.jpeg";
import RMH2 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH2.jpeg";
import RMH3 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH3.jpeg";
import RMH4 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH4.jpeg";
import RMH5 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH5.jpeg";
import RMH6 from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH6.jpeg";
import RMHV from "../assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMHV.mp4";

// Role Play VIDEO
import RolePlay from "../assets/Events/Role Play/PlayRole.mp4";

// Fire Drill VIDEO
import FireDrill from "../assets/Events/Fire Drill/Live Fire Drill - Situation ward fire.mp4";


const Events = () => {
  const events = [
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd1,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd2,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd3,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd4,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd5,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd6,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd7,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd8,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd9,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd10,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd11,
    },
    {
      type: "image",
      title: "Continuous Professional Development Program",
      description: "Workshops and seminars to enhance professional skills.",
      src: Cpd12,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visits to hospitals and healthcare institutions for learning.",
      src:EDU1,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Biomedical Waste Treatment Plant for learning.",
      src:EDU2,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visits to Old age Home.",
      src:EDU3,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visits to Old age Home",
      src:EDU4,
    },
    {
      type: "image",
      title: "Educational Visits",
      description: "Visit to Sub Centre Kakandi for learning.",
      src:EDU5,
    },
    {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH1,
    },
     {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH2,
    },
     {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH3,
    },
     {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH4,
    },
     {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH5,
    },
     {
      type: "image",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMH6,
    },
     {
      type: "video",
      title: "Regional Mental Hospital Yelwarda Pune Posting",
      description: "Practical exposure and training in psychiatric care.",
      src: RMHV,
    },
    {
      type: "video",
      title: "Role Play",
      description: "Interactive role-playing sessions for skill development.",
      src: RolePlay,
    },
    {
      type: "video",
      title: "Live Fire Drill",
      description: "Safety drills to prepare for emergency situations.",
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
    <section className="py-10 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Events & Programs
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        {/* Left - Main image/video */}
        <div className="relative flex-1 bg-white rounded-xl overflow-hidden">
          {events[currentIndex].type === "image" ? (
            <img
              src={events[currentIndex].src}
              alt={events[currentIndex].title}
              className="w-full h-[600px] object-contain bg-gray-50"
            />
          ) : (
            <video
              src={events[currentIndex].src}
              className="w-full h-[600px] object-contain bg-gray-50"
              autoPlay
              muted
              loop
              controls
            />
          )}

          {/* Navigation Arrows */}
          <button
  onClick={prevSlide}
  className="absolute top-1/2 left-3 transform -translate-y-1/2 
             bg-transparent hover:bg-black/30 
             text-white p-3 rounded-full transition"
>
  <FaChevronLeft />
</button>

<button
  onClick={nextSlide}
  className="absolute top-1/2 right-3 transform -translate-y-1/2 
             bg-transparent hover:bg-black/30 
             text-white p-3 rounded-full transition"
>
  <FaChevronRight />
</button>

          {/* Title + Description */}
          <div className="mt-4">
            <h3 className="text-2xl px-4 font-semibold text-gray-800">
              {events[currentIndex].title}
            </h3>
            <p className="text-gray-600 px-4 mt-1 max-w-2xl pb-2">
              {events[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Right - Thumbnails (only 5 visible at once) */}
        <div className="md:w-[25%] flex md:flex-col gap-3 overflow-y-auto max-h-[675px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
          {events.map((event, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex-shrink-0 w-[120px] md:w-full rounded-lg overflow-hidden border-2 transition-transform hover:scale-105 ${
                i === currentIndex ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {event.type === "image" ? (
                <img
                  src={event.src}
                  alt={event.title}
                  className="w-full h-[110px] object-cover"
                />
              ) : (
                <video
                  src={event.src}
                  className="w-full h-[110px] object-cover"
                  muted
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
