import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { fetchEvents as fetchEventsFromApi, isApiConfigured } from "../services/eventsApi";

const STATIC_EVENTS = [
  {
    id: "cpdp",
    title: "Continuous Professional Development Program",
    shortTitle: "CPDP",
    description: "Workshops and seminars to enhance professional skills and competencies in nursing practice.",
    media: [
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP1.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP2.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP3.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP4.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP5.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP6.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP7.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP8.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP9.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP10.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP11.jpeg" },
      { type: "image", src: "/assets/Events/Continuous Professional Development Program/CPDP12.jpeg" },
    ]
  },
  {
    id: "edu-visits",
    title: "Educational Visits",
    shortTitle: "Visits",
    description: "Visits to hospitals and healthcare institutions for practical learning experiences.",
    media: [
      { type: "image", src: "/assets/Events/Educational Visits/RPH.jpeg", caption: "Rural Primary Health Centre" },
      { type: "image", src: "/assets/Events/Educational Visits/Visit to Biomedical Waste Treatment Plant.jpeg", caption: "Biomedical Waste Treatment Plant" },
      { type: "image", src: "/assets/Events/Educational Visits/Visit to Old age Home.jpeg", caption: "Old Age Home Visit" },
      { type: "image", src: "/assets/Events/Educational Visits/Visit to Old age Home1.jpeg", caption: "Old Age Home Visit" },
      { type: "image", src: "/assets/Events/Educational Visits/Visit to Sub Centre Kakandi.jpeg", caption: "Sub Centre Kakandi" },
    ]
  },
  {
    id: "rmh",
    title: "Regional Mental Hospital Yerwada, Pune",
    shortTitle: "RMH Posting",
    description: "Practical exposure and training in psychiatric nursing care and mental health services.",
    media: [
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH1.jpeg" },
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH2.jpeg" },
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH3.jpeg" },
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH4.jpeg" },
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH5.jpeg" },
      { type: "image", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMH6.jpeg" },
      { type: "video", src: "/assets/Events/Regional Mental Hospital Yelwarda, Pune Posting/RMHV.mp4" },
    ]
  },
  {
    id: "role-play",
    title: "Role Play Activities",
    shortTitle: "Role Play",
    description: "Interactive role-playing sessions for clinical skill development and patient communication.",
    media: [
      { type: "video", src: "/assets/Events/Role Play/PlayRole.mp4" },
    ]
  },
  {
    id: "fire-drill",
    title: "Live Fire Drill Exercise",
    shortTitle: "Fire Drill",
    description: "Emergency preparedness and safety drills to prepare for hospital fire situations.",
    media: [
      { type: "video", src: "/assets/Events/Fire Drill/Live Fire Drill - Situation ward fire.mp4" },
    ]
  },
];

function useImagePreloader(media, currentIndex) {
  useEffect(() => {
    if (!media || media.length <= 1) return;
    const indices = [
      (currentIndex + 1) % media.length,
      (currentIndex - 1 + media.length) % media.length,
    ];
    indices.forEach(i => {
      if (media[i]?.type === 'image') {
        const img = new Image();
        img.src = media[i].src;
      }
    });
  }, [media, currentIndex]);
}

const SkeletonPulse = () => (
  <div className="animate-pulse">
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-10 w-24 bg-slate-200 rounded-lg" />
      ))}
    </div>
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <div className="h-5 w-64 bg-slate-200 rounded mb-2" />
        <div className="h-4 w-96 bg-slate-100 rounded" />
      </div>
      <div className="h-[400px] sm:h-[500px] bg-slate-100 flex items-center justify-center">
        <svg className="w-16 h-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  </div>
);

const MediaRenderer = ({ media, eventTitle, onImageLoad, onImageError }) => {
  if (media.type === 'youtube') {
    return (
      <iframe
        src={`${media.src}?rel=0&modestbranding=1`}
        title={media.caption || eventTitle}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  if (media.type === 'video') {
    return (
      <video
        key={media.src}
        src={media.src}
        className="max-h-full max-w-full object-contain"
        controls
        autoPlay
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={media.src}
      alt={media.caption || eventTitle}
      className="max-h-full max-w-full object-contain transition-opacity duration-300"
      loading="lazy"
      onLoad={onImageLoad}
      onError={onImageError}
    />
  );
};

const ThumbnailRenderer = ({ media, index }) => {
  if (media.type === 'youtube') {
    return (
      <img
        src={`https://img.youtube.com/vi/${media.youtubeId}/mqdefault.jpg`}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    );
  }

  if (media.type === 'video') {
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
        <FaPlay className="h-4 w-4 text-slate-500" />
      </div>
    );
  }

  return (
    <img
      src={media.src}
      alt={`Thumbnail ${index + 1}`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
};

const Events = () => {
  const [eventsData, setEventsData] = useState(STATIC_EVENTS);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const tabsRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        let result = null;
        if (isApiConfigured()) {
          result = await fetchEventsFromApi();
        }
        if (!cancelled && result?.length > 0) {
          // Give static events a default order if they don't have one (starting at 100 so they appear after dynamic by default, or 1 to interleave them)
          // Let's assign them 1, 2, 3, 4, 5 so the admin can easily slot dynamic events anywhere.
          const staticWithOrder = STATIC_EVENTS.map((ev, index) => ({
            ...ev,
            order: ev.order || (index + 1) * 10 // Give them 10, 20, 30... so there's room to put things between them!
          }));

          const combinedEvents = [
            ...result,
            ...staticWithOrder.filter(staticEv => !result.find(dynEv => dynEv.id === staticEv.id))
          ];

          // Sort EVERYTHING by the 'order' field ascending
          combinedEvents.sort((a, b) => (a.order || 0) - (b.order || 0));
          setEventsData(combinedEvents);
          setActiveEventIndex(0);
          setActiveMediaIndex(0);
        }
      } catch { /* static fallback */ }
      finally {
        if (!cancelled) setIsInitialLoad(false);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  const activeEvent = eventsData[activeEventIndex];
  const activeMedia = activeEvent?.media?.[activeMediaIndex];

  useImagePreloader(activeEvent?.media, activeMediaIndex);

  const handleEventChange = useCallback((index) => {
    setActiveEventIndex(index);
    setActiveMediaIndex(0);
    setMediaLoaded(false);
  }, []);

  const prevMedia = useCallback(() => {
    setMediaLoaded(false);
    setActiveMediaIndex(prev =>
      prev === 0 ? activeEvent.media.length - 1 : prev - 1
    );
  }, [activeEvent]);

  const nextMedia = useCallback(() => {
    setMediaLoaded(false);
    setActiveMediaIndex(prev =>
      prev === activeEvent.media.length - 1 ? 0 : prev + 1
    );
  }, [activeEvent]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'ArrowRight') nextMedia();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevMedia, nextMedia]);

  if (!activeEvent || !activeMedia) return null;

  return (
    <div id="events-programs" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Events & Programs</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-3"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our training programs, educational visits, and professional development activities
          </p>
        </div>

        {isInitialLoad ? (
          <SkeletonPulse />
        ) : (
          <>
            <div ref={tabsRef} className="flex flex-wrap justify-center gap-2 mb-8">
              {eventsData.map((event, index) => (
                <button
                  key={event.id}
                  id={`event-tab-${event.id}`}
                  onClick={() => handleEventChange(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === activeEventIndex
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                  }`}
                >
                  {event.shortTitle}
                  <span className="ml-1.5 text-xs opacity-70">({event.media.length})</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-800">{activeEvent.title}</h3>
                {activeEvent.description && (
                  <p className="text-sm text-slate-500 mt-1">{activeEvent.description}</p>
                )}
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 relative">
                  <div className="relative h-[400px] sm:h-[500px] bg-slate-100 flex items-center justify-center overflow-hidden">
                    <MediaRenderer
                      media={activeMedia}
                      eventTitle={activeEvent.title}
                      onImageLoad={() => setMediaLoaded(true)}
                      onImageError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmMWY1ZjkiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkltYWdlIHVuYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                        setMediaLoaded(true);
                      }}
                    />

                    {activeMedia.caption && (
                      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-sm max-w-[80%] text-center pointer-events-none">
                        {activeMedia.caption}
                      </div>
                    )}

                    {activeEvent.media.length > 1 && (
                      <>
                        <button
                          onClick={prevMedia}
                          aria-label="Previous image"
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-md border border-slate-200 transition-all hover:scale-105 active:scale-95 z-10"
                        >
                          <FaChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextMedia}
                          aria-label="Next image"
                          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-md border border-slate-200 transition-all hover:scale-105 active:scale-95 z-10"
                        >
                          <FaChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200 z-10">
                      {activeMediaIndex + 1} / {activeEvent.media.length}
                    </div>
                  </div>
                </div>

                {activeEvent.media.length > 1 && (
                  <div className="lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 bg-slate-50 p-3">
                    <p className="text-xs font-medium text-slate-500 mb-2 px-1">
                      Gallery ({activeEvent.media.length})
                    </p>
                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[440px] pb-2 lg:pb-0 scrollbar-thin">
                      {activeEvent.media.map((media, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setMediaLoaded(false);
                            setActiveMediaIndex(index);
                          }}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === activeMediaIndex
                              ? "border-blue-500 ring-2 ring-blue-200 scale-105"
                              : "border-slate-200 hover:border-blue-300 hover:scale-102"
                          }`}
                        >
                          <ThumbnailRenderer media={media} index={index} />
                          {index === activeMediaIndex && (
                            <div className="absolute inset-0 bg-blue-500/10" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;