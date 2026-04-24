import React from 'react';

const Blog = () => {
  return (
    <section className="py-24 bg-[#163020]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-[#EEF0E5] tracking-tighter uppercase">Insights & Blog</h2>
          <button className="text-[#EEF0E5] border-b border-[#EEF0E5] pb-1 text-sm uppercase">Xem tất cả</button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-[#EEF0E5]">
          <div className="border-t border-[#EEF0E5]/20 pt-6 cursor-pointer hover:pl-4 transition-all">
            <span className="text-xs opacity-50">APR 20, 2026</span>
            <h3 className="text-2xl mt-2 font-medium">Cách tối ưu High-Ticket Funnel cho khóa học DaVinci</h3>
          </div>
          <div className="border-t border-[#EEF0E5]/20 pt-6 cursor-pointer hover:pl-4 transition-all">
            <span className="text-xs opacity-50">APR 18, 2026</span>
            <h3 className="text-2xl mt-2 font-medium">Xu hướng Vibe Coding và tương lai của AI Agency</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
