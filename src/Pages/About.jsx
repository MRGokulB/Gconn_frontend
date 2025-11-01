import React, { useState } from "react";
import { Eye, Target, Lightbulb, Trophy, CheckCircle } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const tabs = [
    {
      id: "vision",
      title: "Vision",
      icon: Eye,
      content: `This Government college of nursing aspires to provide compassionate and respectful comprehensive care to suffering humanity with advanced body of scientific nursing knowledge, skills & attitude, innovative technological approaches, and evidenced based nursing practice, locally, nationally and globally, at high level of quality Nursing Education, nursing service administration, nursing practice and research.`,
    },
    {
      id: "mission",
      title: "Mission",
      icon: Target,
      content: `Our mission is to improve health through "Pursuit of Excellence" In Nursing Education, Quality Nursing Care, Evidence Based Nursing Research through new creative innovations.`,
    },
    {
      id: "philosophy",
      title: "Philosophy",
      icon: Lightbulb,
      content: `The Nursing Programme would strive to achieve academic and health excellence by educating and training the students who shall function as nurse specialists, practitioners, consultants, educators, administrators and researchers in a wide variety of professional settings in meeting the National Health Priorities and changing health needs of the society. It would encourage being self directed and effectively dealing with day to day health problems within the existing constraints and acting as an agent of social change. It would prepare a nurse who can make independent decision in nursing situations, protect the rights of patients and facilitate individuals and groups in pursuit of health care in the hospital, community and conduct research studies in the area of nursing practice. It would promote accountability and commitment to the nursing profession and encourage lifelong learning which fosters quality nursing care.`,
    },
    {
      id: "goals",
      title: "Goals & Objectives",
      icon: Trophy,
      content: [
        "Develop competent Nursing graduates who uphold values of truth, integrity, peace, democracy and human rights.",
        "Promote and partake in academic programmes that involve personality development, social involvement and are responsive to national and international health care standards.",
        "Generate significant research programmes which contribute to an evidence-based, scientific and technologically advanced nursing education and practice.",
      ],
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            About Our College
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 max-w-4xl mx-auto">
            Dr. Shankarrao Chavan Government College of Nursing, Vishnupuri, Nanded
          </h3>
        </div>

        {/* Introduction Content */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10 mb-8">
          <div className="prose max-w-none">
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg sm:text-base">
              <p>
                Dr. Shankarrao Chavan Government College of Nursing (B.Sc.) was established on <span className="font-semibold text-blue-600">16th March 2021</span>. Dr.S.C.Govt.CON is a second most B.Sc Nursing Government College in Marathwada Region, Maharashtra. Nanded district is in the territory of Marathwada developmental corporation in the state of Maharashtra. Nanded is a city of sacred place of Sikhism with huge influx of tourists and devotees every year and also a major centre in Marathwada in terms of education and business. Most of the people from district and the surrounding villages move to the city as it is growing. As a result, the health system here is under increasing stress. So Government medical college demanded to establish College of Nursing which will help to reduce over burden on health care delivery system.
              </p>
              <p>
                In the state, Government Medical Colleges have considered the need of Nursing Officers, therefore Dr. Shankarrao Chavan Government Medical College and Hospital, Vishnupuri Nanded have Established Government College of Nursing (B.Sc.) with an <span className="font-semibold text-emerald-600">intake capacity of 50 students</span> which was approved by government in the meeting of cabinet on 28.02.2021.
              </p>
              <p>
                The college is recognized by <span className="font-semibold">Indian Nursing Council (INC) New Delhi</span>, and <span className="font-semibold">Maharashtra University of Health Sciences (MUHS) Nashik</span> and is committed to provide promotive, preventive, curative and rehabilitative services to all to achieve excellence in Nursing education, Clinical practice and Community service.
              </p>
              <p>
                The admissions to this course are purely based on merit and as per the norms of affiliating authorities. The students are provided with individual guidance from skilled and qualified teaching faculties, as well as from the eminent visiting faculties of the respective field. With this support and guidance the students are carrying out many social and clinical research projects successfully. The course will enhance the students in building their career and a great demand at national and international sectors. After completing the course, the students have job opportunities in Government / Private Sectors and also helpful for self employment.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                      activeTab === tab.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-center sm:text-left">{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            {activeTabData && (
              <>
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
                    {React.createElement(activeTabData.icon, {
                      className: "h-6 w-6 sm:h-7 sm:w-7 text-indigo-600"
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Our {activeTabData.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {activeTabData.id === "goals" ? "Guiding principles for excellence" : "Core values that drive us forward"}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {Array.isArray(activeTabData.content) ? (
                    // Goals as list
                    activeTabData.content.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    // Other tabs as paragraph
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50/50 to-blue-50/50 border border-indigo-100">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {activeTabData.content}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">INC Recognized</h4>
            <p className="text-sm text-gray-600">
              Indian Nursing Council, New Delhi
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">MUHS Affiliated</h4>
            <p className="text-sm text-gray-600">
              Maharashtra University of Health Sciences
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow text-center sm:col-span-3 lg:col-span-1">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">Government College</h4>
            <p className="text-sm text-gray-600">
              Established 16th March 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;