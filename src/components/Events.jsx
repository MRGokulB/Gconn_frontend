import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

// Image imports
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

// Grouped events data
const eventsData = [
  {
    id: "cpdp",
    title: "Continuous Professional Development Program",
    shortTitle: "CPDP",
    description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
    media: [
      { type: "image", src: Cpd1 },
      { type: "image", src: Cpd2 },
      { type: "image", src: Cpd3 },
      { type: "image", src: Cpd4 },
      { type: "image", src: Cpd5 },
      { type: "image", src: Cpd6 },
      { type: "image", src: Cpd7 },
      { type: "image", src: Cpd8 },
      { type: "image", src: Cpd9 },
      { type: "image", src: Cpd10 },
      { type: "image", src: Cpd11 },
      { type: "image", src: Cpd12 },
    ]
  },
  {
    id: "edu-visits",
    title: "Educational Visits",
    shortTitle: "Visits",
    description: "Visits to hospitals and healthcare institutions for practical learning experiences.",
    media: [
      { type: "image", src: EDU1, caption: "Rural Primary Health Centre" },
      { type: "image", src: EDU2, caption: "Biomedical Waste Treatment Plant" },
      { type: "image", src: EDU3, caption: "Old Age Home Visit" },
      { type: "image", src: EDU4, caption: "Old Age Home Visit" },
      { type: "image", src: EDU5, caption: "Sub Centre Kakandi" },
    ]
  },
  {
    id: "rmh",
    title: "Regional Mental Hospital Yerwada, Pune",
    shortTitle: "RMH Posting",
    description: "Practical exposure and training in psychiatric nursing care and mental health services.",
    media: [
      { type: "image", src: RMH1 },
      { type: "image", src: RMH2 },
      { type: "image", src: RMH3 },
      { type: "image", src: RMH4 },
      { type: "image", src: RMH5 },
      { type: "image", src: RMH6 },
      { type: "video", src: RMHV },
    ]
  },
  {
    id: "role-play",
    title: "Role Play Activities",
    shortTitle: "Role Play",
    description: "Interactive role-playing sessions for clinical skill development and patient communication.",
    media: [
      { type: "video", src: RolePlay },
    ]
  },
  {
    id: "fire-drill",
    title: "Live Fire Drill Exercise",
    shortTitle: "Fire Drill",
    description: "Emergency preparedness and safety drills to prepare for hospital fire situations.",
    media: [
      { type: "video", src: FireDrill },
    ]
  },
];

const Events = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const activeEvent = eventsData[activeEventIndex];
  const activeMedia = activeEvent.media[activeMediaIndex];

  const handleEventChange = (index) => {
    setActiveEventIndex(index);
    setActiveMediaIndex(0); // Reset to first media when switching events
  };

  const prevMedia = () => {
    setActiveMediaIndex((prev) =>
      prev === 0 ? activeEvent.media.length - 1 : prev - 1
    );
  };

  const nextMedia = () => {
    setActiveMediaIndex((prev) =>
      prev === activeEvent.media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Events & Programs</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-3"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our training programs, educational visits, and professional development activities
          </p>
        </div>

        {/* Event Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {eventsData.map((event, index) => (
            <button
              key={event.id}
              onClick={() => handleEventChange(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${index === activeEventIndex
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
            >
              {event.shortTitle}
              <span className="ml-1.5 text-xs opacity-70">({event.media.length})</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Event Title Bar */}
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-800">{activeEvent.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{activeEvent.description}</p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Main Media Display */}
            <div className="flex-1 relative">
              <div className="relative h-[400px] sm:h-[500px] bg-slate-100 flex items-center justify-center">
                {activeMedia.type === "image" ? (
                  <img
                    src={activeMedia.src}
                    alt={activeEvent.title}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    key={activeMedia.src}
                    src={activeMedia.src}
                    className="max-h-full max-w-full object-contain"
                    controls
                    autoPlay
                    muted
                  />
                )}

                {/* Navigation Arrows (only show if more than 1 media) */}
                {activeEvent.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-md border border-slate-200 transition-all hover:scale-105"
                    >
                      <FaChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-md border border-slate-200 transition-all hover:scale-105"
                    >
                      <FaChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200">
                  {activeMediaIndex + 1} / {activeEvent.media.length}
                </div>
              </div>
            </div>

            {/* Thumbnails Sidebar */}
            {activeEvent.media.length > 1 && (
              <div className="lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500 mb-2 px-1">
                  Gallery ({activeEvent.media.length})
                </p>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[440px] pb-2 lg:pb-0">
                  {activeEvent.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMediaIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === activeMediaIndex
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-slate-200 hover:border-blue-300"
                        }`}
                    >
                      {media.type === "image" ? (
                        <img
                          src={media.src}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                          <FaPlay className="h-4 w-4 text-slate-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;