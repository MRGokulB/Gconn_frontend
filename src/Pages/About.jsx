import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const visionText = `This Government college of nursing aspires to provide compassionate and respectful comprehensive care to suffering humanity with advanced body of scientific nursing knowledge, skills & attitude, innovative technological approaches, and evidenced based nursing practice, locally, nationally and globally, at high level of quality Nursing Education, nursing service administration, nursing practice and research.`;

  const missionText = `Our mission is to improve health through “Pursuit of Excellence” In Nursing Education, Quality Nursing Care, Evidence Based Nursing Research through new creative innovations.`;

  const philosophyText = `The Nursing Programme would strive to achieve academic and health excellence by educating and training the students who shall function as nurse specialists, practitioners, consultants, educators, administrators and researchers in a wide variety of professional settings in meeting the National Health Priorities and changing health needs of the society. It would encourage being self directed and effectively dealing with day to day health problems within the existing constraints and acting as an agent of social change. It would prepare a nurse who can make independent decision in nursing situations, protect the rights of patients and facilitate individuals and groups in pursuit of health care in the hospital, community and conduct research studies in the area of nursing practice. It would promote accountability and commitment to the nursing profession and encourage lifelong learning which fosters quality nursing care.`;

  const goalsText = `• Develop competent Nursing graduates who uphold values of truth, integrity, peace, democracy and human rights.
• Promote and partake in academic programmes that involve personality development, social involvement and are responsive to national and international health care standards.
• Generate significant research programmes which contribute to an evidence-based, scientific and technologically advanced nursing education and practice.
`;

  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading (Left Aligned) */}
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 uppercase">
            More About
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 uppercase tracking-wide">
            Dr. Shankarrao Chavan Government College of Nursing, Vishnupuri, Nanded
          </h3>
        </div>

        {/* Intro Paragraphs (Reduced gap) */}
        <div className="text-gray-700 leading-relaxed space-y-5 mb-10">
          <p>
            Dr. Shankarrao Chavan Government College of Nursing (B.Sc.) was established on 16th March 2021. Dr.S.C.Govt.CON is a second most B.Sc Nursing Government College in Marathwada Region, Maharashtra. Nanded district is in the territory of Marathwada developmental corporation in the state of Maharashtra. Nanded is a city of sacred place of Sikhism with huge influx of tourists and devotees every year and also a major centre in Marathwada in terms of education and business. Most of the people from district and the surrounding villages move to the city as it is growing. As a result, the health system here is under increasing stress. So Government medical college demanded to establish College of Nursing which will help to reduce over burden on health care delivery system.
          </p>
          <p>
            In the state, Government Medical Colleges have considered the need of Nursing Officers, therefore Dr. Shankarrao Chavan Government Medical College and Hospital, Vishnupuri Nanded have Established Government College of Nursing (B.Sc.) with an intake capacity of 50 students which was approved by government in the meeting of cabinet on 28.02.2021.
          </p>
          <p>
            The college is recognized by Indian Nursing Council (INC) New Delhi, and Maharashtra University of Health Sciences (MUHS) Nashik and is committed to provide promotive, preventive, curative and rehabilitative services to all to achieve excellence in Nursing education, Clinical practice and Community service.
          </p>
          <p>
            The admissions to this course are purely based on merit and as per the norms of affiliating authorities. The students are provided with individual guidance from skilled and qualified teaching faculties, as well as from the eminent visiting faculties of the respective field. With this support and guidance the students are carrying out many social and clinical research projects successfully. The course will enhance the students in building their career and a great demand at national and international sectors. After completing the course, the students have job opportunities in Government / Private Sectors and also helpful for self employment.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["vision", "mission", "philosophy", "goals"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 font-semibold rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100"
              }`}
            >
              {tab === "vision" && "VISION"}
              {tab === "mission" && "MISSION"}
              {tab === "philosophy" && "PHILOSOPHY"}
              {tab === "goals" && "GOALS & OBJECTIVES"}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner border border-gray-200 transition-all duration-300 ease-in-out">
          {activeTab === "vision" && (
            <p className="text-gray-700 leading-relaxed">{visionText}</p>
          )}
          {activeTab === "mission" && (
            <p className="text-gray-700 leading-relaxed">{missionText}</p>
          )}
          {activeTab === "philosophy" && (
            <p className="text-gray-700 leading-relaxed">{philosophyText}</p>
          )}
          {activeTab === "goals" && (
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{goalsText}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;