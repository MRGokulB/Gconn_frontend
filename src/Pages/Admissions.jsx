import React, { useState } from "react";
import { GraduationCap, ClipboardList, Users, Briefcase } from "lucide-react";

const Admissions = () => {
  const sections = [
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      icon: <GraduationCap size={24} />,
      content: [
        "Minimum age: 17 years on or before 31st Dec. of admission year.",
        "10+2 from recognized board (Science stream).",
        "Open category: minimum 45% in Physics, Chemistry, Biology.",
        "SC/ST/OBC: minimum 40% in PCB.",
        "English is compulsory in 10+2.",
        "Medically fit.",
        "NEET exam applicable.",
        "Admission as per norms of I.N.C, M.U.H.S., DMER, and statutory bodies.",
      ],
    },
    {
      id: "programme-outcome",
      title: "Programme Outcome",
      icon: <ClipboardList size={24} />,
      content: [
        "Prepare graduates to assume responsibilities as professional nurses and midwives in promotive, preventive, curative, and rehabilitative services.",
        "Prepare nurses to make independent decisions, protect rights, function in hospital & community, conduct research, and assume roles of teacher, supervisor, and manager.",
      ],
    },
    {
      id: "programme-specific",
      title: "Programme Specific Outcome",
      icon: <ClipboardList size={24} />,
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
      icon: <Briefcase size={24} />,
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
      icon: <Users size={24} />,
      content: [
        "Students will practice high-quality nursing and critically reflect on their professional practice in various healthcare settings and educational institutions.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        B.Sc. Nursing Admissions
      </h1>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === section.id
                ? "bg-blue-700 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {section.icon}
            {section.title}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="space-y-8 text-gray-700">
        {sections.map(
          (section) =>
            activeTab === section.id && (
              <div key={section.id}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                  {section.icon} {section.title}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>

      {/* Inspirational Quote */}
      <div className="mt-12 text-center text-gray-600 italic text-lg">
        "The quality of a leader is reflected in the standards that they set for themselves." - Ray Kroc
      </div>
    </div>
  );
};

export default Admissions;
