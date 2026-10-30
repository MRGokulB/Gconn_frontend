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
  Sparkles,
  Award,
  Check,
  Clock,
  ListOrdered,
  Search,
} from "lucide-react";

const INSTITUTIONAL_ROUND_PDF =
  "/assets/Admissions/Gen%20Merit%20list%20,%20Selection%20List%20and%20Waiting%20list%20For%20Institution%20Round.pdf";
const BROCHURE_PDF =
  "/assets/Annexures%20All/Annexures%202026-27/Admission%20Brousher.pdf";

// Official data from Institutional Level Round Notification (Ref: No. Dr. SCGCONN/Bsc Nursing adm/1096-1099/2026)
const VACANT_SEATS_DATA = [
  { category: "SC", general: 2, women: 0, total: 2 },
  { category: "NT-D", general: 1, women: 0, total: 1 },
  { category: "OBC", general: 2, women: 0, total: 2 },
  { category: "OPEN", general: 1, women: 1, total: 2 },
];

const SELECTION_LIST = [
  {
    sr: 1,
    sml: 702,
    formNo: "266008878",
    name: "CHAVAN PAYAL RAJUDAS",
    sex: "F",
    cet: "96.86%",
    category: "VJA",
    selectedCategory: "Open-Gen",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    sr: 2,
    sml: 1613,
    formNo: "266010191",
    name: "BADNE RUDRAKSH CHHATRABHUJ",
    sex: "M",
    cet: "93.81%",
    category: "NT-D",
    selectedCategory: "NT-D Gen",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    sr: 3,
    sml: 1633,
    formNo: "266009285",
    name: "DAKE ARYAN KASHINATH",
    sex: "M",
    cet: "93.49%",
    category: "OBC",
    selectedCategory: "OBC-Gen-1",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    sr: 4,
    sml: 3095,
    formNo: "266011409",
    name: "AISHWARYA RAMAJI ADMANE",
    sex: "F",
    cet: "87.97%",
    category: "OBC",
    selectedCategory: "Open-Woman",
    statusBadge: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    sr: 5,
    sml: 3136,
    formNo: "266005367",
    name: "JOSHUA AGHAMKAR",
    sex: "M",
    cet: "87.22%",
    category: "OBC",
    selectedCategory: "OBC-Gen-2",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    sr: 6,
    sml: 6366,
    formNo: "266008442",
    name: "INGLE SUYASH SHESHRAO",
    sex: "M",
    cet: "74.21%",
    category: "SC",
    selectedCategory: "SC-Gen-1",
    statusBadge: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    sr: 7,
    sml: 9766,
    formNo: "266010725",
    name: "RAUT PRADNYA ASHOK",
    sex: "F",
    cet: "55.45%",
    category: "SC",
    selectedCategory: "SC-Gen-2",
    statusBadge: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

const WAITING_LIST = [
  {
    group: "OPEN - General Waiting",
    candidates: [
      {
        sr: 1,
        sml: 3872,
        formNo: "266006388",
        name: "UTKARSHA SANAJY YADAV",
        sex: "F",
        category: "Open",
        remark: "Also Open-Women 1 Waiting",
      },
      {
        sr: 2,
        sml: 11019,
        formNo: "266004039",
        name: "WAGHAMARE ABHISHEK RAJU",
        sex: "M",
        category: "SC",
        remark: "-",
      },
      {
        sr: 3,
        sml: 11240,
        formNo: "266011598",
        name: "SHETWAD PANDURANG JANARDHAN",
        sex: "M",
        category: "Open",
        remark: "-",
      },
      {
        sr: 4,
        sml: 12147,
        formNo: "266012836",
        name: "SHELKE VAISHNVI BALASAHEB",
        sex: "F",
        category: "NT-C",
        remark: "Also Open-Women 2 Waiting",
      },
    ],
  },
  {
    group: "SC - General Waiting",
    candidates: [
      {
        sr: 1,
        sml: 11019,
        formNo: "266004039",
        name: "WAGHAMARE ABHISHEK RAJU",
        sex: "M",
        category: "SC",
        remark: "-",
      },
    ],
  },
];

const GENERAL_MERIT_LIST = [
  { sr: 1, sml: 702, formNo: "266008878", name: "CHAVAN PAYAL RAJUDAS", sex: "F", category: "VJA", cet: "96.86%", hscPcb: "56%", remark: "-" },
  { sr: 2, sml: 1613, formNo: "266010191", name: "BADNE RUDRAKSH CHHATRABHUJ", sex: "M", category: "NT-D", cet: "93.81%", hscPcb: "71%", remark: "-" },
  { sr: 3, sml: 1633, formNo: "266009285", name: "DAKE ARYAN KASHINATH", sex: "M", category: "OBC", cet: "93.49%", hscPcb: "58%", remark: "-" },
  { sr: 4, sml: 3095, formNo: "266011409", name: "AISHWARYA RAMAJI ADMANE", sex: "F", category: "OBC", cet: "87.97%", hscPcb: "51%", remark: "-" },
  { sr: 5, sml: 3136, formNo: "266005367", name: "JOSHUA AGHAMKAR", sex: "M", category: "OBC", cet: "87.22%", hscPcb: "86%", remark: "-" },
  { sr: 6, sml: 3872, formNo: "266006388", name: "UTKARSHA SANAJY YADAV", sex: "F", category: "OPEN", cet: "84.68%", hscPcb: "66%", remark: "-" },
  { sr: 7, sml: 6366, formNo: "266008442", name: "INGLE SUYASH SHESHRAO", sex: "M", category: "SC", cet: "74.21%", hscPcb: "64%", remark: "-" },
  { sr: 8, sml: 9766, formNo: "266010725", name: "RAUT PRADNYA ASHOK", sex: "F", category: "SC", cet: "55.45%", hscPcb: "87%", remark: "-" },
  { sr: 9, sml: 11019, formNo: "266004039", name: "WAGHAMARE ABHISHEK RAJU", sex: "M", category: "SC", cet: "47.89%", hscPcb: "49%", remark: "-" },
  { sr: 10, sml: 11240, formNo: "266011598", name: "SHETWAD PANDURANG JANRDHAN", sex: "M", category: "OPEN", cet: "45.84%", hscPcb: "86%", remark: "-" },
  { sr: 11, sml: 12147, formNo: "266012836", name: "SHELKE VAISHNVI BALASAHEB", sex: "F", category: "NTC", cet: "34.54%", hscPcb: "41%", remark: "-" },
  { sr: 12, sml: 7263, formNo: "266006536", name: "DHAMAPRIYA NARASHING MASURE", sex: "F", category: "SC", cet: "68.55%", hscPcb: "76%", remark: "Candidate Name not exist in 85% Institute Quota" },
];

const Admissions = () => {
  const [activeTab, setActiveTab] = useState("institutional-round");
  const [activeListSubTab, setActiveListSubTab] = useState("selection"); // "selection" | "waiting" | "merit"
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      id: "institutional-round",
      title: "Institutional Round",
      badge: "Vacant Seats Round",
      isUrgent: true,
      icon: FileCheck,
      fullTitle:
        "B.Sc Nursing Admission Institutional Level Round for Vacant Seats after CAP Round",
      subtitle:
        "General Merit List, Selection List and Waiting List (Ref: SCGCONN/Bsc Nursing adm/1096-1099/2026)",
      tag: "Post CAP Round Vacant Seats",
      downloadUrl: INSTITUTIONAL_ROUND_PDF,
      downloadName: "BSc_Nursing_Institutional_Round_Merit_Selection_Waiting_List.pdf",
      instructions: [
        "Eligibility & Conduct: The Institutional Level Round is conducted strictly for eligible candidates to fill vacant seats remaining after the Centralized Admission Process (CAP) rounds.",
        "General Merit List: Comprehensive merit ranking published for all applicants who registered and submitted documents under the 85% institutional quota.",
        "Selection List: Provisional seat allotment executed in strict adherence to State CET Cell, DMER Maharashtra, and constitutional reservation quotas.",
        "Waiting List: Maintained in order of inter-se merit to be operated sequentially in case any selected candidate fails to report or cancel their allotment.",
        "Physical Document Verification: Selected candidates must report in person to the College of Nursing Office at Dr. S.C.G.M.C. Campus, Vishnupuri, Nanded with all original certificates, affidavits, and self-attested photocopies.",
        "Fee Submission: Allotted seat will be confirmed only upon payment of the prescribed college fees within the stipulated schedule.",
        "Statutory Approval: All admissions remain provisional and subject to formal verification and approval by MUHS Nashik, DMER Maharashtra, and the Indian Nursing Council (INC).",
      ],
    },
    {
      id: "admission-brochure",
      title: "Admission Brochure",
      badge: "Academic Year 2026-27",
      icon: FileText,
      fullTitle: "B.Sc. Nursing Admission Brochure",
      subtitle: "Official Information Brochure & Guidelines for Academic Year 2026-27",
      tag: "Academic Year 2026-27",
      downloadUrl: BROCHURE_PDF,
      downloadName: "BSc_Nursing_Admission_Brochure_2026-27.pdf",
      instructions: [
        "Official B.Sc. Nursing Admission Brochure for Academic Year 2026-27 published by Government College of Nursing, Nanded.",
        "Covers detailed eligibility criteria, intake capacity, and seat distribution guidelines across categories.",
        "Provides comprehensive guidance on statutory body norms (I.N.C., M.U.H.S. Nashik, DMER Maharashtra).",
        "Details academic curriculum, clinical training rotations at our 1080-bed hospital, and campus facilities.",
        "Download the official brochure PDF directly for complete procedural rules and contact directories.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      icon: GraduationCap,
      fullTitle: "Eligibility Criteria",
      subtitle: "Prescribed Norms for B.Sc. Nursing Admissions",
      tag: "Admission Norms",
      instructions: [
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
      icon: ClipboardList,
      fullTitle: "Programme Outcome",
      subtitle: "Core Graduate Competencies & Capabilities",
      tag: "Academic Objectives",
      instructions: [
        "Prepare graduates to assume responsibilities as professional nurses and midwives in promotive, preventive, curative, and rehabilitative services.",
        "Prepare nurses to make independent clinical decisions, protect patient rights, function in hospital & community settings, conduct research, and assume roles of teacher, supervisor, and manager.",
        "Equip students with leadership traits and collaborative decision-making skills to excel in multidisciplinary healthcare teams.",
      ],
    },
    {
      id: "programme-specific",
      title: "Programme Specific Outcome",
      icon: ClipboardList,
      fullTitle: "Programme Specific Outcome",
      subtitle: "Specialized Clinical and Practical Objectives",
      tag: "Specialized Training",
      instructions: [
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
      icon: Users,
      fullTitle: "Course Outcome",
      subtitle: "Holistic Clinical Practice & Reflective Learning",
      tag: "Clinical Excellence",
      instructions: [
        "Students will practice high-quality, evidence-based nursing care across diverse clinical disciplines.",
        "Critically reflect on professional practice in various healthcare settings and tertiary educational institutions.",
        "Develop empathetic bedside manners and uphold compassionate patient advocacy at all times.",
      ],
    },
    {
      id: "job-opportunities",
      title: "Job Opportunities",
      icon: Briefcase,
      fullTitle: "Job Opportunities & Career Scope",
      subtitle: "Professional Pathways in India and Globally",
      tag: "Placement & Scope",
      instructions: [
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

  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

  const handleSelectSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById("admissions-content-area");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredMeritList = GENERAL_MERIT_LIST.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.formNo.includes(searchQuery) ||
      c.sml.toString().includes(searchQuery) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/50 py-12 px-4 sm:px-6 lg:px-8">
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

          {/* Quick Notice Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
            {/* Notice 1: Institutional Level Round */}
            <div className="relative bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 border-2 border-amber-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-xs">
                    <Bell className="h-3.5 w-3.5 animate-pulse" />
                    Latest Notice
                  </span>
                  <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                    7 Vacant Seats
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  B.Sc Nursing Admission Institutional Level Round for Vacant Seats after CAP Round
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  General Merit list, Selection list and Waiting list for institutional level round.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/70 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleSelectSection("institutional-round")}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Lists & Instructions</span>
                </button>
                <a
                  href={INSTITUTIONAL_ROUND_PDF}
                  download="BSc_Nursing_Institutional_Round_Merit_Selection_Waiting_List.pdf"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Notice</span>
                </a>
              </div>
            </div>

            {/* Notice 2: Admission Brochure */}
            <div className="relative bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                    <FileText className="h-3.5 w-3.5" />
                    Official Brochure
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    AY 2026-27
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  B.Sc. Nursing Admission Brochure (2026-27)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Complete admission guidelines, eligibility criteria, statutory affiliations, and seat rules.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleSelectSection("admission-brochure")}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Brochure Details</span>
                </button>
                <a
                  href={BROCHURE_PDF}
                  download="BSc_Nursing_Admission_Brochure_2026-27.pdf"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Anchor for smooth scroll */}
        <div id="admissions-content-area" className="scroll-mt-24"></div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 sm:p-2.5">
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

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
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

              {/* Header Action Button if download is available */}
              {activeSection.downloadUrl && (
                <div className="flex items-center gap-2 lg:flex-shrink-0">
                  <a
                    href={activeSection.downloadUrl}
                    download={activeSection.downloadName}
                    className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Official Document</span>
                  </a>
                </div>
              )}
            </div>

            {/* INSTITUTIONAL ROUND SPECIAL VIEWS (NO PDF EMBED) */}
            {activeSection.id === "institutional-round" && (
              <div className="space-y-8">
                {/* Important Notice Alert */}
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-semibold">Notice for Institutional Level Round:</strong> Conducted strictly for vacant seats after CAP rounds. Below are the Category-wise Vacancy Report, General Merit List, Selection List, and Waiting List as published by the college administration (Dr. S.C.G.M.C. Campus, Nanded).
                  </div>
                </div>

                {/* Vacant Seats Report Table / Cards */}
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Award className="h-5 w-5 text-indigo-600" />
                        <span>Vacant Seats Report (रिक्त जागेचा अहवाल)</span>
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Category-wise vacant seat distribution for Institutional Level Round
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-xs self-start sm:self-auto">
                      Total Vacant Seats: 07
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {VACANT_SEATS_DATA.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs hover:border-indigo-200 transition-colors"
                      >
                        <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                          Category: {item.category}
                        </div>
                        <div className="text-2xl font-extrabold text-gray-900">
                          {item.total.toString().padStart(2, "0")}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-1 flex justify-between">
                          <span>Gen: {item.general}</span>
                          <span>Women: {item.women}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Lists Viewer (Selection / Waiting / General Merit) */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  {/* List Sub-tabs bar */}
                  <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <button
                        onClick={() => setActiveListSubTab("selection")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                          activeListSubTab === "selection"
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        <Check className="h-4 w-4" />
                        <span>Selection List (7)</span>
                      </button>

                      <button
                        onClick={() => setActiveListSubTab("waiting")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                          activeListSubTab === "waiting"
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        <Clock className="h-4 w-4" />
                        <span>Waiting List (5)</span>
                      </button>

                      <button
                        onClick={() => setActiveListSubTab("merit")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                          activeListSubTab === "merit"
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        <ListOrdered className="h-4 w-4" />
                        <span>General Merit List (12)</span>
                      </button>
                    </div>

                    {activeListSubTab === "merit" && (
                      <div className="relative w-full sm:w-64">
                        <Search className="h-3.5 w-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search name, form no, SML..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-1 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Sub-tab 1: Selection List Table */}
                  {activeListSubTab === "selection" && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                            <th className="py-3 px-3 sm:px-4">Sr.</th>
                            <th className="py-3 px-3 sm:px-4">S.M.L</th>
                            <th className="py-3 px-3 sm:px-4">CET Form No.</th>
                            <th className="py-3 px-3 sm:px-4">Candidate Name</th>
                            <th className="py-3 px-3 sm:px-4">Gender</th>
                            <th className="py-3 px-3 sm:px-4">CET %</th>
                            <th className="py-3 px-3 sm:px-4">Candidate Cat.</th>
                            <th className="py-3 px-3 sm:px-4">Selected Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {SELECTION_LIST.map((cand) => (
                            <tr key={cand.sr} className="hover:bg-slate-50 transition-colors">
                              <td className="py-3 px-3 sm:px-4 font-semibold text-slate-500">{cand.sr}</td>
                              <td className="py-3 px-3 sm:px-4 font-bold text-indigo-700">{cand.sml}</td>
                              <td className="py-3 px-3 sm:px-4 text-slate-600 font-mono text-xs">{cand.formNo}</td>
                              <td className="py-3 px-3 sm:px-4 font-bold text-gray-900">{cand.name}</td>
                              <td className="py-3 px-3 sm:px-4 text-slate-600">{cand.sex}</td>
                              <td className="py-3 px-3 sm:px-4 font-semibold text-emerald-700">{cand.cet}</td>
                              <td className="py-3 px-3 sm:px-4 font-medium text-slate-700">{cand.category}</td>
                              <td className="py-3 px-3 sm:px-4">
                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${cand.statusBadge}`}>
                                  {cand.selectedCategory}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Sub-tab 2: Waiting List */}
                  {activeListSubTab === "waiting" && (
                    <div className="p-4 sm:p-6 space-y-6 bg-white">
                      {WAITING_LIST.map((group, gIdx) => (
                        <div key={gIdx} className="border border-slate-200 rounded-xl overflow-hidden">
                          <div className="bg-amber-50/70 px-4 py-2.5 border-b border-amber-200 flex items-center justify-between">
                            <span className="font-bold text-xs sm:text-sm text-amber-900">
                              {group.group}
                            </span>
                            <span className="text-[11px] font-semibold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                              {group.candidates.length} Candidate(s)
                            </span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                              <thead>
                                <tr className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                                  <th className="py-2.5 px-3">Sr.</th>
                                  <th className="py-2.5 px-3">S.M.L</th>
                                  <th className="py-2.5 px-3">CET Form No.</th>
                                  <th className="py-2.5 px-3">Candidate Name</th>
                                  <th className="py-2.5 px-3">Gender</th>
                                  <th className="py-2.5 px-3">Category</th>
                                  <th className="py-2.5 px-3">Remark</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {group.candidates.map((cand) => (
                                  <tr key={cand.sr} className="hover:bg-slate-50">
                                    <td className="py-2.5 px-3 font-semibold text-slate-500">{cand.sr}</td>
                                    <td className="py-2.5 px-3 font-bold text-indigo-700">{cand.sml}</td>
                                    <td className="py-2.5 px-3 font-mono text-xs text-slate-600">{cand.formNo}</td>
                                    <td className="py-2.5 px-3 font-bold text-gray-900">{cand.name}</td>
                                    <td className="py-2.5 px-3 text-slate-600">{cand.sex}</td>
                                    <td className="py-2.5 px-3 font-medium text-slate-700">{cand.category}</td>
                                    <td className="py-2.5 px-3 text-slate-500 text-xs">
                                      {cand.remark !== "-" ? (
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                                          {cand.remark}
                                        </span>
                                      ) : (
                                        "-"
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sub-tab 3: General Merit List Table */}
                  {activeListSubTab === "merit" && (
                    <div className="overflow-x-auto bg-white">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                            <th className="py-3 px-3">Sr.</th>
                            <th className="py-3 px-3">S.M.L</th>
                            <th className="py-3 px-3">CET Form No.</th>
                            <th className="py-3 px-3">Candidate Name</th>
                            <th className="py-3 px-3">Sex</th>
                            <th className="py-3 px-3">Category</th>
                            <th className="py-3 px-3">MH CET %</th>
                            <th className="py-3 px-3">HSC PCB %</th>
                            <th className="py-3 px-3">Remark</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredMeritList.map((cand) => (
                            <tr key={cand.sr} className="hover:bg-slate-50 transition-colors">
                              <td className="py-2.5 px-3 font-semibold text-slate-500">{cand.sr}</td>
                              <td className="py-2.5 px-3 font-bold text-indigo-700">{cand.sml}</td>
                              <td className="py-2.5 px-3 font-mono text-xs text-slate-600">{cand.formNo}</td>
                              <td className="py-2.5 px-3 font-bold text-gray-900">{cand.name}</td>
                              <td className="py-2.5 px-3 text-slate-600">{cand.sex}</td>
                              <td className="py-2.5 px-3 font-medium text-slate-700">{cand.category}</td>
                              <td className="py-2.5 px-3 font-semibold text-indigo-600">{cand.cet}</td>
                              <td className="py-2.5 px-3 text-slate-600">{cand.hscPcb}</td>
                              <td className="py-2.5 px-3 text-xs">
                                {cand.remark !== "-" ? (
                                  <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded font-medium">
                                    {cand.remark}
                                  </span>
                                ) : (
                                  "-"
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* List Footer Bar with Document Download */}
                  <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                    <span>
                      Official Signed Authority: Principal, Govt. College of Nursing, Dr. S.C.G.M.C., Nanded
                    </span>
                    <a
                      href={INSTITUTIONAL_ROUND_PDF}
                      download="BSc_Nursing_Institutional_Round_Merit_Selection_Waiting_List.pdf"
                      className="inline-flex items-center gap-1.5 text-indigo-700 hover:text-indigo-900 font-semibold underline underline-offset-2"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Signed Administrative Copy (PDF, 618 KB)</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* KEY INSTRUCTIONS SECTION (Retained & Standardized) */}
            <div className="mt-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3.5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Key Information & Instructions</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {activeSection.instructions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50/70 hover:bg-indigo-50/40 transition-colors border border-slate-100 hover:border-indigo-100"
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
            <button
              onClick={() => handleSelectSection("institutional-round")}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              View Institutional Round
            </button>
            <button
              onClick={() => handleSelectSection("admission-brochure")}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
            >
              View Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;