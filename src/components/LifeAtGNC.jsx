import React from "react";
import { Heart, Users, BookOpen, Award, Stethoscope, Globe, Target, Lightbulb } from "lucide-react";

const LifeAtGNC = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Learn to provide empathetic, patient-centered nursing care with dignity and respect",
      color: "rose"
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Gain hands-on experience in our 1080-bed parent hospital with modern facilities",
      color: "blue"
    },
    // {
    //   icon: BookOpen,
    //   title: "Evidence-Based Learning",
    //   description: "Access to digital library, research journals, and contemporary nursing resources",
    //   color: "emerald"
    // },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Participate in health camps, surveys, and rural health center programs",
      color: "amber"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Curriculum aligned with INC guidelines and international nursing practices",
      color: "purple"
    },
    // {
    //   icon: Target,
    //   title: "Career Growth",
    //   description: "Placement support and opportunities in government and private healthcare sectors",
    //   color: "indigo"
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Innovation & Research",
    //   description: "Engage in research projects and evidence-based nursing practice initiatives",
    //   color: "cyan"
    // },
    // {
    //   icon: Award,
    //   title: "Quality Education",
    //   description: "Learn from experienced faculty and eminent visiting professors in the field",
    //   color: "orange"
    // }
  ];

  const getColorClasses = (color) => {
    const colors = {
      rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", hover: "hover:border-rose-300" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:border-blue-300" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", hover: "hover:border-emerald-300" },
      amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", hover: "hover:border-amber-300" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:border-purple-300" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hover: "hover:border-indigo-300" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", hover: "hover:border-cyan-300" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:border-orange-300" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Life at Dr. S.C. Govt. College of Nursing
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant learning environment where academic excellence meets compassionate care. 
            Our college fosters innovation, community service, and professional growth in every aspect of nursing education.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-6 shadow-sm border ${colors.border} ${colors.hover} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-7 w-7 ${colors.text}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Nursing Journey?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of healthcare through excellence, compassion, and dedication
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for Admission
            </button>
            <button 
              onClick={() => window.location.href = '/faculty'}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Meet Our Faculty
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtGNC;