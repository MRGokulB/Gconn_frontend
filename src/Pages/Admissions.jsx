import React, { useState } from "react";
import { GraduationCap, ClipboardList, Users, Briefcase, CheckCircle, Quote, FileText, Download, Eye, ExternalLink } from "lucide-react";

const Admissions = () => {
  const sections = [
    {
      id: "admission-brochure",
      title: "Admission Brochure",
      icon: FileText,
      isBrochure: true,
      pdfUrl: "/assets/Annexures All/Annexures 2026-27/Admission Brousher.pdf",
      content: [
        "Official B.Sc. Nursing Admission Brochure for Academic Year 2026-27.",
        "Detailed eligibility criteria, intake capacity, and admission guidelines.",
        "Complete information on statutory body norms (I.N.C., M.U.H.S., DMER).",
        "View online or download the official PDF brochure directly.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      icon: GraduationCap,
      content: [
        "Minimum age: 17 years on or before 31st Dec. of admission year.",
        "10+2 from recognized board (Science stream).",
        "Open category: minimum 45% in Physics, Chemistry, Biology.",
        "SC/ST/OBC: minimum 40% in PCB.",
        "English is compulsory in 10+2.",
        "Medically fit.",
        "NEET/CET exam applicable.",
        "Admission as per norms of I.N.C, M.U.H.S., DMER, and statutory bodies.",
      ],
    },
    {
      id: "programme-outcome",
      title: "Programme Outcome",
      icon: ClipboardList,
      content: [
        "Prepare graduates to assume responsibilities as professional nurses and midwives in promotive, preventive, curative, and rehabilitative services.",
        "Prepare nurses to make independent decisions, protect rights, function in hospital & community, conduct research, and assume roles of teacher, supervisor, and manager.",
      ],
    },
    {
      id: "programme-specific",
      title: "Programme Specific Outcome",
      icon: ClipboardList,
      content: [
        "Apply knowledge from sciences and medicine to provide care to individuals, families, and communities.",
        "Understand lifestyle and other factors affecting health.",
        "Provide nursing care using the nursing process collaboratively.",
        "Demonstrate critical thinking for quality care.",
        "Utilize latest technology in healthcare.",
        "Provide promotive, preventive, and restorative services.",
        "Practice ethically within legal boundaries.",
        "Communicate effectively and promote teamwork.",
        "Demonstrate teaching skills in clinical/community health.",
        "Participate effectively in healthcare delivery.",
        "Show leadership and managerial skills.",
        "Conduct research to improve care quality.",
        "Contribute to personal and professional advancement.",
      ],
    },
    {
      id: "job-opportunities",
      title: "Job Opportunities",
      icon: Briefcase,
      content: [
        "Bedside Nurse",
        "Nurse Administrator",
        "Teaching in School/College",
        "School Health Nurse",
        "Industrial Nurse",
        "Community Health Nurse",
        "Nurse Practitioner",
        "Nurse Consultant",
      ],
    },
    {
      id: "course-outcome",
      title: "Course Outcome",
      icon: Users,
      content: [
        "Students will practice high-quality nursing and critically reflect on their professional practice in various healthcare settings and educational institutions.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);
  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            B.Sc. Nursing Admissions
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in shaping the future of healthcare through excellence in nursing education
          </p>

          {/* Brochure Quick Access CTA Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white border border-indigo-100 p-3 sm:p-4 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900 font-semibold text-sm sm:text-base">
              <FileText className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <span>B.Sc. Nursing Admission Brochure (2026-27)</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/assets/Annexures All/Annexures 2026-27/Admission Brousher.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg text-xs sm:text-sm font-medium transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>View PDF</span>
              </a>
              <a
                href="/assets/Annexures All/Annexures 2026-27/Admission Brousher.pdf"
                download="BSc_Nursing_Admission_Brochure_2026-27.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                      activeTab === section.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">{section.title}</span>
                    <span className="sm:hidden">
                      {section.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            {activeSection && (
              <>
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
                      {React.createElement(activeSection.icon, {
                        className: "h-6 w-6 sm:h-7 sm:w-7 text-indigo-600"
                      })}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        {activeSection.title}
                      </h2>
                      {activeSection.isBrochure && (
                        <span className="inline-block px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                          Academic Year 2026-27
                        </span>
                      )}
                    </div>
                  </div>

                  {activeSection.isBrochure && (
                    <div className="flex items-center gap-2">
                      <a
                        href={activeSection.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-sm font-semibold transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Open PDF</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                      <a
                        href={activeSection.pdfUrl}
                        download="BSc_Nursing_Admission_Brochure_2026-27.pdf"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Content List */}
                <div className="space-y-4 mb-8">
                  {activeSection.content.map((item, index) => (
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
                  ))}
                </div>

                {/* Embedded PDF Viewer for Brochure */}
                {activeSection.isBrochure && (
                  <div className="mt-6 border border-gray-200 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                    <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between text-white text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-400" />
                        <span className="font-medium truncate">Admission Brousher (2026-27).pdf</span>
                      </div>
                      <a
                        href={activeSection.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-white flex items-center gap-1 text-xs"
                      >
                        <span>Full Screen</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <iframe
                      src={activeSection.pdfUrl}
                      title="B.Sc. Nursing Admission Brochure 2026-27"
                      className="w-full h-[650px] border-0"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-3">
  "Service to humanity is service to God. In nursing, we have the privilege to serve those in their most vulnerable moments."
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
  — Mahatma Gandhi (Adapted)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
              <GraduationCap className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">4-Year Program</h3>
            <p className="text-sm text-gray-600">
              Comprehensive curriculum with theoretical and practical training
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">Clinical Exposure</h3>
            <p className="text-sm text-gray-600">
              Hands-on experience in our 1080-bed parent hospital
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3">
              <Briefcase className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">Career Growth</h3>
            <p className="text-sm text-gray-600">
              Excellent placement opportunities in India and abroad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;