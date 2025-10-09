import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Faculty", value: "1000+" },
    { label: "Students", value: "13,000+" },
    { label: "Publications", value: "3,500+" },
    { label: "Patents", value: "450+" },
    { label: "Projects", value: "2,800+" },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
