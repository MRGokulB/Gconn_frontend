import React from "react";

const Announcements = () => {
  const data = [
    { id: 1, title: "UCEED Application Open", desc: "For admission to BDes programme at IITs" },
    { id: 2, title: "CEED Registration Started", desc: "For admission to MDes & PhD Design" },
    { id: 3, title: "CTO Programme", desc: "Chief Technology Officer Programme launched" },
  ];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Announcements</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 shadow-sm rounded-lg border hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
