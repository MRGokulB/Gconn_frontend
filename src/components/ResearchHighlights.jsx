import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ResearchHighlights = () => {
  const highlights = [
    { id: 1, img: "/research1.jpg", title: "Solar Energy Research Growth" },
    { id: 2, img: "/research2.jpg", title: "Nanoparticle Coating Method" },
    { id: 3, img: "/research3.jpg", title: "Smart Farming Innovation" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Research Highlights</h2>
      <Swiper slidesPerView={1} spaceBetween={20} breakpoints={{ 768: { slidesPerView: 3 } }}>
        {highlights.map((h) => (
          <SwiperSlide key={h.id}>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <img src={h.img} alt={h.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{h.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResearchHighlights;
