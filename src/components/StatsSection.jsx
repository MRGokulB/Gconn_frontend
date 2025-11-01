import React from "react";
import { Users, BookOpen, FileText, Award, Briefcase } from "lucide-react";


const StatsSection = () => {
  const stats = [
    { label: "Faculty Members", value: "15+", icon: Users },
    { label: "Students Enrolled", value: "200+", icon: Users }, 
    { label: "Clinical Hours", value: "2000+", icon: Award },
    { label: "Hospital Partnerships", value: "10+", icon: Briefcase },
  ];

  return (
    <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">

      <div className="  grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </div>  
    </section>
  );
};

export default StatsSection;
