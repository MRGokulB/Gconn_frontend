import React from "react";

const EventsCalendar = () => {
  const events = [
    { date: "31 Oct 2025", title: "Rashtriya Ekta Diwas" },
    { date: "27 Oct - 02 Nov 2025", title: "Vigilance Awareness Week" },
    { date: "15 Oct 2025", title: "Institution’s Innovation Day" },
  ];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Events Calendar</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {events.map((e, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow-sm border hover:shadow-md">
            <p className="text-sm text-gray-500">{e.date}</p>
            <h3 className="font-semibold mt-1">{e.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsCalendar;
