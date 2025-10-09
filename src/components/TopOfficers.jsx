import React from "react";

const officers = [
  {
    name: "Hon’ble Shri Acharya Devvrat",
    title: "Chancellor",
    subtitle: "Governor of Maharashtra",
    img: "/images/acharya-devvrat.jpg",
  },
  {
    name: "Shri. Hasan Mushrif",
    title: "Pro-Chancellor",
    subtitle: "Minister of Medical Education",
    img: "/images/hasan-mushrif.jpg",
  },
  {
    name: "Lt Gen Madhuri Kanitkar (Retd)",
    title: "Vice-Chancellor",
    subtitle: "PVSM, AVSM, VSM",
    img: "/images/madhuri-kanitkar.jpg",
  },
  {
    name: "Prof. Dr. Milind Nikumbh",
    title: "Pro Vice-Chancellor",
    img: "/images/milind-nikumbh.jpg",
  },
  {
    name: "Dr. Rajendra Bangal",
    title: "Registrar",
    img: "/images/rajendra-bangal.jpg",
  },
  {
    name: "Prof. Dr. Sandeep S. Kadu",
    title: "Controller of Examinations",
    img: "/images/sandeep-kadu.jpg",
  },
];

export default function TopOfficers() {
  return (
    <section className="py-14 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          Top Officers of the University
        </h2>
        <div className="mt-2 w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Officers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-4">
        {officers.map((officer, index) => (
          <div key={index} className="text-center">
            {/* Circular Image with Yellow Laurel Ring */}
            <div className="relative flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-4 border-yellow-400 flex items-center justify-center p-1 shadow-md">
                <img
                  src={officer.img}
                  alt={officer.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              {/* Laurel Ring using CSS pseudo element */}
              <div className="absolute -z-10 w-36 h-36 rounded-full border-4 border-yellow-400 opacity-70 blur-[0.5px]"></div>
            </div>

            {/* Officer Info */}
            <h3 className="mt-4 font-semibold text-gray-800 leading-snug">
              {officer.name}
            </h3>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              {officer.title}
            </p>
            {officer.subtitle && (
              <p className="text-sm text-gray-500">{officer.subtitle}</p>
            )}

            {/* Know More Button */}
            <button className="mt-4 px-4 py-1.5 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
