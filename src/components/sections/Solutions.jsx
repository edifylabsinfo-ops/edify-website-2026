import React from 'react';

export default function Solutions() {
  return (
    <section id="solutions" className="relative z-10 py-24 bg-[#EEF0E5] w-full">
      <div className="container-std">
        <div className="reveal mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#304D30] uppercase mb-3">/ Giải pháp đào tạo</div>
          <h2 className="text-3xl md:text-5xl font-black text-[#163020] leading-tight">Dành Cho Mọi Đối Tượng,<br />Thiết Kế Cho Mỗi Nhu Cầu</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#B6C4B6] p-10 reveal">
            <h3 className="text-xl font-bold mb-6 text-[#163020] uppercase tracking-wider">Dành Cho Cá Nhân</h3>
            <div className="space-y-4 text-sm text-[#163020]/60 uppercase font-bold tracking-widest">
              <p>→ Performance Ads</p>
              <p>→ Data & Analytics</p>
              <p>→ Content Creator</p>
            </div>
          </div>
          <div className="bg-[#163020] p-10 reveal">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Dành Cho Doanh Nghiệp</h3>
            <div className="space-y-4 text-sm text-[#B6C4B6] uppercase font-bold tracking-widest">
              <p>→ Đào Tạo Tùy Chỉnh</p>
              <p>→ Quản Lý Đội Ngũ</p>
              <p>→ Chuyển Đổi Số</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
