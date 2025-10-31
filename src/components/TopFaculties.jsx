import React from "react";
import { GraduationCap, Heart } from "lucide-react";

const NangraleImg = "/assets/images/Faculty/Nangrale B B.jpg";
const ChakreImg = "/assets/images/Faculty/ChakreBP.jpg";
const ChandbibiImg = "/assets/images/Faculty/Pathan C H.jpg";
const ShaikhImg = "/assets/images/Faculty/Shaikh.jpg";
const DeshmaneImg = "/assets/images/Faculty/Deshmane U B.jpg";
const MadleImg = "/assets/images/Faculty/Madle P A.jpg";

const officers = [
  {
    name: "Prof. Balaji Nangrale",
    title: "Principal",
    specialty: "Administration",
    img: NangraleImg,
    isPrincipal: true,
  },
  {
    name: "Prof. Bhimu Chakre",
    title: "Vice Principal",
    specialty: "Mental Health Nursing",
    img: ChakreImg,
    isVicePrincipal: true,
  },
  {
    name: "Ms. Chandbibi Pathan",
    title: "Tutor",
    specialty: "Obstetrics & Gynecology",
    img: ChandbibiImg,
  },
  {
    name: "Mr. Salim Shaikh",
    title: "Tutor",
    specialty: "Community Health",
    img: ShaikhImg,
  },
  {
    name: "Ms. Unita Deshmane",
    title: "Tutor",
    specialty: "Nursing Foundation",
    img: DeshmaneImg,
  },
  {
    name: "Ms. Pradnya Madle",
    title: "Tutor",
    specialty: "Obstetrics & Gynecology",
    img: MadleImg,
  },
];

export default function TopOfficers() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
           
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Distinguished Faculty
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet our dedicated team of experienced nursing educators committed to shaping the future of healthcare
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
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
            {/* <button className="mt-4 px-4 py-1.5 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"> */}
              {/* Know More */}
            {/* </button> */}
          </div>
        ))}
        </div>

        {/* View All Faculty CTA */}
        <div className="text-center mt-12">
          <a
            href="/faculty"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-sm text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Faculty Members</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}