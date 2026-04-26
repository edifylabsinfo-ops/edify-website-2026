import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Hệ thống Booking Mũi Né", category: "Web Development" },
    { title: "Xây kênh TikTok Edu 100k", category: "Video Studio" },
    { title: "Tối ưu CPA Khóa Học", category: "Performance Ads" },
    { title: "Dashboard Quản Trị Nội Bộ", category: "Automation" }
  ];

  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5] reveal border-t border-[#EEF0E5]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Dự Án Tiêu Biểu</h2>
            <p className="text-sm opacity-60 max-w-md">Những hệ thống Growth và tài sản số chúng tôi đã trực tiếp xây dựng & tối ưu.</p>
          </div>
          <button className="border-b border-[#EEF0E5] pb-1 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
            Xem tất cả Case Study
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden bg-black/40 aspect-video flex items-end p-8 border border-[#EEF0E5]/10">
              {/* Sếp thay src ảnh thật vào đây */}
              <img 
                src={`https://via.placeholder.com/800x450/111111/444444?text=Dự+án+${i+1}`} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
              />
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
