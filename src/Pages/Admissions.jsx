import React, { useState } from "react";
import {
  GraduationCap,
  ClipboardList,
  Users,
  Briefcase,
  CheckCircle,
  Quote,
  FileText,
  Download,
  Eye,
  ExternalLink,
  FileCheck,
  AlertCircle,
  Bell,
  Building2,
  Calendar,
  Sparkles,
} from "lucide-react";

const INSTITUTIONAL_ROUND_PDF =
  "/assets/Admissions/Gen%20Merit%20list%20,%20Selection%20List%20and%20Waiting%20list%20For%20Institution%20Round.pdf";
const BROCHURE_PDF =
  "/assets/Annexures%20All/Annexures%202026-27/Admission%20Brousher.pdf";

const Admissions = () => {
  const sections = [
    {
      id: "institutional-round",
      title: "Institutional Round",
      shortTitle: "Inst. Round",
      badge: "Latest Notification",
      isUrgent: true,
      icon: FileCheck,
      fullTitle:
        "B.Sc. Nursing Admission Institutional Level Round for Vacant Seats after CAP Round",
      subtitle:
        "General Merit List, Selection List and Waiting List",
      tag: "Post CAP Round Vacant Seats",
      hasPdf: true,
      pdfUrl: INSTITUTIONAL_ROUND_PDF,
      fileName:
        "Gen Merit list , Selection List and Waiting list For Institution Round.pdf",
      downloadName:
        "BSc_Nursing_Institutional_Round_Merit_Selection_Waiting_List.pdf",
      fileSize: "618 KB",
      roundCategories: [
        {
          title: "General Merit List",
          description:
            "Complete merit ranking of all registered candidates eligible for the institutional level round.",
          badge: "All Candidates",
          color: "border-blue-200 bg-blue-50/60 text-blue-900",
          iconColor: "text-blue-600",
        },
        {
          title: "Selection List",
          description:
            "Candidates provisionally selected for admission to vacant seats as per inter-se merit & reservation rules.",
          badge: "Selected",
          color: "border-emerald-200 bg-emerald-50/60 text-emerald-900",
          iconColor: "text-emerald-600",
        },
        {
          title: "Waiting List",
          description:
            "Eligible candidates placed in order of merit to fill vacancies created by cancellations or non-reporting.",
          badge: "Waitlist",
          color: "border-amber-200 bg-amber-50/60 text-amber-900",
          iconColor: "text-amber-600",
        },
      ],
      content: [
        "Official institutional level round conducted for eligible candidates to fill vacant seats remaining after the Centralized Admission Process (CAP) rounds.",
        "General Merit List: Comprehensive merit ranking published for all applicants who submitted valid documentation.",
        "Selection List: Seat allotment in order of merit in strict accordance with State CET Cell & DMER category guidelines.",
        "Waiting List: Maintained in order of inter-se merit for subsequent consideration against any unjoined seats.",
        "Physical Document Verification: Selected candidates must report in person at the College Office with original certificates and required affidavits.",
        "Fee Submission: Allotment is confirmed upon payment of the prescribed fees within the notified schedule.",
        "Statutory Compliance: All admissions are provisional and subject to approval from MUHS Nashik, DMER Maharashtra, and I.N.C.",
      ],
    },
    {
      id: "admission-brochure",
      title: "Admission Brochure",
      shortTitle: "Brochure",
      badge: "Academic Year 2026-27",
      icon: FileText,
      fullTitle: "B.Sc. Nursing Admission Brochure",
      subtitle: "Official Information Brochure & Guidelines for Academic Year 2026-27",
      tag: "Academic Year 2026-27",
      hasPdf: true,
      pdfUrl: BROCHURE_PDF,
      fileName: "Admission Brousher (2026-27).pdf",
      downloadName: "BSc_Nursing_Admission_Brochure_2026-27.pdf",
      fileSize: "Official PDF",
      content: [
        "Official B.Sc. Nursing Admission Brochure for Academic Year 2026-27.",
        "Detailed eligibility criteria, intake capacity, and seat distribution guidelines.",
        "Complete information on statutory body norms (I.N.C., M.U.H.S., DMER).",
        "Curriculum overview, clinical training details, and campus facilities.",
        "View online or download the official PDF brochure directly.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      shortTitle: "Eligibility",
      icon: GraduationCap,
      fullTitle: "Eligibility Criteria",
      subtitle: "Prescribed Norms for B.Sc. Nursing Admissions",
      tag: "Admission Norms",
      content: [
        "Minimum age: 17 years on or before 31st December of the admission year.",
        "10+2 (Higher Secondary) from a recognized board in the Science stream.",
        "Open / General category: minimum 45% aggregate in Physics, Chemistry, and Biology (PCB).",
        "Reserved category (SC/ST/OBC): minimum 40% aggregate in PCB.",
        "English is compulsory in 10+2 examinations.",
        "Candidate must be medically fit as certified by an authorized medical officer.",
        "Candidate must qualify in NEET / MH-B.Sc. Nursing CET as mandated by the State CET Cell.",
        "Admission strictly as per norms of I.N.C, M.U.H.S., DMER Maharashtra, and statutory authorities.",
      ],
    },
    {
      id: "programme-outcome",
      title: "Programme Outcome",
      shortTitle: "Outcomes",
      icon: ClipboardList,
      fullTitle: "Programme Outcome",
      subtitle: "Core Graduate Competencies & Capabilities",
      tag: "Academic Objectives",
      content: [
        "Prepare graduates to assume responsibilities as professional nurses and midwives in promotive, preventive, curative, and rehabilitative services.",
        "Prepare nurses to make independent clinical decisions, protect patient rights, function in hospital & community settings, conduct research, and assume roles of teacher, supervisor, and manager.",
        "Equip students with leadership traits and collaborative decision-making skills to excel in multidisciplinary healthcare teams.",
      ],
    },
    {
      id: "programme-specific",
      title: "Programme Specific Outcome",
      shortTitle: "Specific",
      icon: ClipboardList,
      fullTitle: "Programme Specific Outcome",
      subtitle: "Specialized Clinical and Practical Objectives",
      tag: "Specialized Training",
      content: [
        "Apply knowledge from biological, physical, and behavioural sciences to provide patient-centered care.",
        "Assess lifestyle and socioeconomic factors affecting health in individuals, families, and communities.",
        "Utilize the systematic nursing process to plan, execute, and evaluate therapeutic interventions.",
        "Demonstrate critical thinking and clinical judgment in emergency and intensive care scenarios.",
        "Leverage modern healthcare technology, electronic health records, and clinical instrumentation effectively.",
        "Deliver promotive, preventive, and restorative services across diverse population demographics.",
        "Practice strictly within ethical, legal, and professional regulatory frameworks.",
        "Communicate empathetically with patients, relatives, and interdisciplinary healthcare personnel.",
        "Exhibit instructional skills in community health outreach and patient education.",
        "Participate dynamically in institutional healthcare delivery, quality audit, and patient safety protocols.",
        "Demonstrate foundational research abilities to advance evidence-based nursing practice.",
      ],
    },
    {
      id: "course-outcome",
      title: "Course Outcome",
      shortTitle: "Course",
      icon: Users,
      fullTitle: "Course Outcome",
      subtitle: "Holistic Clinical Practice & Reflective Learning",
      tag: "Clinical Excellence",
      content: [
        "Students will practice high-quality, evidence-based nursing care across diverse clinical disciplines.",
        "Critically reflect on professional practice in various healthcare settings and tertiary educational institutions.",
        "Develop empathetic bedside manners and uphold compassionate patient advocacy at all times.",
      ],
    },
    {
      id: "job-opportunities",
      title: "Job Opportunities",
      shortTitle: "Careers",
      icon: Briefcase,
      fullTitle: "Job Opportunities & Career Scope",
      subtitle: "Professional Pathways in India and Globally",
      tag: "Placement & Scope",
      content: [
        "Staff / Bedside Nurse in Government, Municipal & Super-Specialty Hospitals",
        "Nurse Administrator, Nursing Superintendent & Ward Supervisor",
        "Nursing Tutor / Clinical Instructor in Nursing Schools & Colleges",
        "School Health Nurse & Educational Institution Health Coordinator",
        "Industrial / Occupational Health Nurse in Corporate & Industrial Sectors",
        "Community Health Officer (CHO) & Public Health Nurse in Primary Health Centers",
        "Nurse Practitioner & Specialized Critical Care / OT Nurse",
        "Quality Auditor, Nurse Consultant & Clinical Research Coordinator",
        "Global Career Opportunities across UK (NHS), USA, Canada, Australia, and Middle East",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

  const handleSelectSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById("admissions-content-area");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100/80 text-indigo-800 text-xs sm:text-sm font-semibold rounded-full mb-3">
            <Building2 className="h-4 w-4" />
            <span>Government College of Nursing, Vishnupuri, Nanded</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            B.Sc. Nursing Admissions
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-indigo-600 rounded-full mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering compassionate healthcare professionals through world-class clinical
            training, academic rigor, and state-of-the-art tertiary hospital infrastructure.
          </p>

          {/* Quick Announcement Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
            {/* Announcement 1: Institutional Level Round */}
            <div className="relative bg-gradient-to-br from-amber-50/80 via-white to-indigo-50/50 border-2 border-amber-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-xs">
                    <Bell className="h-3.5 w-3.5 animate-pulse" />
                    Latest Notice
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Vacant Seats Round
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  B.Sc Nursing Admission Institutional Level Round for Vacant Seats after CAP Round
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  General Merit list, Selection list and Waiting list for institutional level round.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/60 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleSelectSection("institutional-round")}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <a
                  href={INSTITUTIONAL_ROUND_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open PDF</span>
                </a>
                <a
                  href={INSTITUTIONAL_ROUND_PDF}
                  download="BSc_Nursing_Institutional_Round_Merit_Selection_Waiting_List.pdf"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Announcement 2: Admission Brochure */}
            <div className="relative bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                    <FileText className="h-3.5 w-3.5" />
                    Official Publication
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    AY 2026-27
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  B.Sc. Nursing Admission Brochure (2026-27)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Comprehensive admission guidelines, intake capacity, statutory affiliations, and rules.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleSelectSection("admission-brochure")}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <a
                  href={BROCHURE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open PDF</span>
                </a>
                <a
                  href={BROCHURE_PDF}
                  download="BSc_Nursing_Admission_Brochure_2026-27.pdf"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Anchor for smooth scroll */}
        <div id="admissions-content-area" className="scroll-mt-24"></div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 sm:p-3">
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                const isActive = activeTab === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                        : "bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-100"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0" />
                    <span>{section.title}</span>
                    {section.isUrgent && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isActive
                            ? "bg-amber-400 text-slate-900"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        New
                      </span>
                    )}
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
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-xs">
                      {React.createElement(activeSection.icon, {
                        className: "h-6 w-6 sm:h-7 sm:w-7",
                      })}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="inline-block px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                          {activeSection.tag}
                        </span>
                        {activeSection.badge && (
                          <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full border border-amber-200">
                            {activeSection.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {activeSection.fullTitle || activeSection.title}
                      </h2>
                      {activeSection.subtitle && (
                        <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">
                          {activeSection.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Header Action Buttons if Section has PDF */}
                  {activeSection.hasPdf && (
                    <div className="flex flex-wrap items-center gap-2 lg:flex-shrink-0">
                      <a
                        href={activeSection.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-xs sm:text-sm font-semibold transition-colors border border-indigo-200/80"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Online</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                      <a
                        href={activeSection.pdfUrl}
                        download={activeSection.downloadName}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Institutional Round Special Summary Cards */}
                {activeSection.id === "institutional-round" && activeSection.roundCategories && (
                  <div className="mb-8">
                    <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 mb-6">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                        <strong className="font-semibold">Important Notice for Applicants:</strong> Institutional Level Round was conducted strictly for vacant seats remaining after the conclusion of Centralized Admission Process (CAP) rounds. Candidates must check their merit rank in the General Merit list, Selection list, and Waiting list below.
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {activeSection.roundCategories.map((cat, idx) => (
                        <div
                          key={idx}
                          className={`rounded-xl border p-4.5 ${cat.color} transition-all duration-200`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-sm sm:text-base">{cat.title}</span>
                            <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                              {cat.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Information & Guidelines Checklist */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span>Key Information & Instructions</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeSection.content.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50/70 hover:bg-indigo-50/50 transition-colors border border-slate-100 hover:border-indigo-100"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Embedded PDF Viewer for Sections with PDF */}
                {activeSection.hasPdf && (
                  <div className="mt-8 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-900">
                    {/* Viewer Header Bar */}
                    <div className="bg-slate-800 px-4 sm:px-6 py-3.5 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3 text-white">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block font-medium text-xs sm:text-sm truncate text-slate-100">
                            {activeSection.fileName}
                          </span>
                          <span className="block text-[11px] text-slate-400">
                            {activeSection.fileSize || "Official Document"} • Portable Document Format
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={activeSection.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Full Screen</span>
                        </a>
                        <a
                          href={activeSection.pdfUrl}
                          download={activeSection.downloadName}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 shadow-xs"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                    {/* PDF iframe */}
                    <div className="relative w-full bg-slate-900">
                      <iframe
                        src={`${activeSection.pdfUrl}#toolbar=1&navpanes=0`}
                        title={activeSection.fullTitle || activeSection.title}
                        className="w-full h-[520px] sm:h-[680px] lg:h-[760px] border-0"
                      />
                    </div>

                    {/* Viewer Footer Note */}
                    <div className="bg-slate-800/90 px-4 py-2.5 border-t border-slate-700/80 flex items-center justify-between text-slate-400 text-xs">
                      <span>Previewing official publication document</span>
                      <a
                        href={activeSection.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-white font-medium underline underline-offset-2"
                      >
                        Trouble viewing? Click here to open directly
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50/50 rounded-2xl border border-indigo-100 p-6 sm:p-8 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-2xl flex items-center justify-center shadow-xs text-indigo-600 border border-indigo-100">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-2 font-serif">
                  "Service to humanity is service to God. In nursing, we have the privilege to serve those in their most vulnerable moments."
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold tracking-wide">
                  — Mahatma Gandhi (Adapted)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">4-Year Degree Program</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Recognized comprehensive curriculum combining academic foundational sciences with progressive clinical bedside nursing.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">1080-Bed Parent Hospital</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Extensive hands-on clinical exposure at Dr. Shankarrao Chavan Government Medical College & Hospital, Vishnupuri, Nanded.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Global Career Pathways</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              High employability and career advancement opportunities across central & state government healthcare, defense, and international institutions.
            </p>
          </div>
        </div>

        {/* Admission Help & Contact Strip */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
              Admission Office & Helpdesk
            </span>
            <h3 className="text-lg sm:text-xl font-bold">Have Questions About Admissions or Institutional Round?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Visit the College of Nursing Admission Section at Dr. S.C.G.M.C. Campus, Vishnupuri, Nanded during official working hours (10:00 AM – 5:00 PM).
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#admissions"
              onClick={() => handleSelectSection("institutional-round")}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              View Institutional Round
            </a>
            <a
              href="#admissions"
              onClick={() => handleSelectSection("admission-brochure")}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;