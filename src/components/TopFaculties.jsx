import React from "react";

import NangraleImg from '../assets/images/Faculty/Nangrale B B.jpg';
import ChakreImg from '../assets/images/Faculty/Chakre B P.jpg';
import ChandbibiImg from '../assets/images/Faculty/Pathan C H.jpg';
import ShaikhImg from '../assets/images/Faculty/Shaikh.jpg';
import DeshmaneImg from '../assets/images/Faculty/Deshmane U B.jpg';
import MadleImg from '../assets/images/Faculty/Madle P A.jpg';

const officers = [
  {
    name: "Prof. Balaji Nangrale",
    title: "Principal • Administration",
    // subtitle: "Governor of Maharashtra",
    img: NangraleImg,
  },
  {
    name: "Prof. Bhimu Chakre",
    title: "Vice Principal • Mental Health Nursing",
    // subtitle: "Minister of Medical Education",
    img: ChakreImg,
  },
  {
    name: "Ms. Chandbibi Pathan",
    title: "Tutor • ObGy",
    // subtitle: "PVSM, AVSM, VSM",
    img: ChandbibiImg,
  },
  {
    name: "Mr. Salim Shaikh",
    title: "Tutor • Community Health",
    img: ShaikhImg,
  },
  {
    name: "Ms. Unita Deshmane",
    title: "Tutor • Nursing Foundation",
    img: DeshmaneImg,
  },
  {
    name: "Ms. Pradnya Madle",
    title: "Tutor • ObGy",
    img: MadleImg,
  },
];

export default function TopOfficers() {
  return (
    <section className="py-14 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          Top Faculties of the University
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
            {/* <button className="mt-4 px-4 py-1.5 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"> */}
              {/* Know More */}
            {/* </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
