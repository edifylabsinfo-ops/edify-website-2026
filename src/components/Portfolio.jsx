import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "DaVinci Resolve Mastery", category: "E-Learning / Funnel", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1000&auto=format&fit=crop" },
    { title: "The New Streamer", category: "TikTok LIVE / Studio", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" },
    { title: "Edify Agency", category: "Performance Marketing", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5] border-y border-[#EEF0E5]/10 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 uppercase tracking-tighter">Dự án & Kết quả</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#163020] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-60 mb-2">{p.category}</p>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
