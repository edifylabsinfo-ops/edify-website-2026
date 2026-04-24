import React from 'react';

const Team = () => {
  const members = [
    { name: "Vũ Đức Anh", role: "Creative Director", image: "https://via.placeholder.com/300x400" },
    { name: "Lê Quang Khải", role: "Technical Lead", image: "https://via.placeholder.com/300x400" },
    { name: "John Lee", role: "Lead Mentor", image: "https://via.placeholder.com/300x400" }
  ];

  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter uppercase">Đội Ngũ Chuyên Gia</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <div key={i} className="group relative overflow-hidden border border-[#EEF0E5]/10 bg-black/20 p-4">
              <img src={m.image} alt={m.name} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="mt-6">
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-[#EEF0E5]/60 text-sm uppercase tracking-widest mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
