import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LatestNews = () => {
  const news = [
    { id: 1, img: "/news1.jpg", title: "Mahatma Gandhi Jayanti Celebrated" },
    { id: 2, img: "/news2.jpg", title: "Swachhotsav 2025 Conducted" },
    { id: 3, img: "/news3.jpg", title: "Hindi Fortnight 2025" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Latest News</h2>
      <Swiper slidesPerView={1} spaceBetween={20} breakpoints={{
        768: { slidesPerView: 3 },
      }}>
        {news.map((n) => (
          <SwiperSlide key={n.id}>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <img src={n.img} alt={n.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-blue-600 mt-2 text-sm">Read More →</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;
