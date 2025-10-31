import React from "react";
import { Users, BookOpen, FileText, Award, Briefcase } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: "Faculty Members", value: "15+", icon: Users },
    { label: "Students Enrolled", value: "200+", icon: Users },
    { label: "Research Papers", value: "50+", icon: FileText },
    { label: "Clinical Hours", value: "2000+", icon: Award },
    { label: "Hospital Partnerships", value: "10+", icon: Briefcase },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-3">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <div 
                key={i} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg 
                         border border-white/20 hover:bg-white/20 transition-all duration-300 
                         hover:scale-105 hover:shadow-xl text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{s.value}</h3>
                <p className="text-white/90 text-sm font-medium">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;