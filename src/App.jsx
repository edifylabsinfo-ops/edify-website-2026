import React from 'react';
import LeadForm from '../components/LeadForm'; // Đảm bảo đúng đường dẫn tới LeadForm

export default function Home() {
  return (
    <div className="min-h-screen bg-[#163020] text-[#EEF0E5] font-sans selection:bg-[#EEF0E5] selection:text-[#163020]">
      {/* HEADER TỐI GIẢN */}
      <header className="px-6 md:px-12 py-8 border-b border-[#EEF0E5]/10 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">
          Edify Labs.
        </h1>
        <div className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">
          Hệ sinh thái chuyển đổi v2.0
        </div>
      </header>

      {/* HERO SECTION - LAYOUT 2 CỘT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* CỘT TRÁI: COPYWRITING SÁT THỦ */}
          <div className="space-y-8">
            <div className="w-16 h-[1px] bg-[#EEF0E5]/50"></div>
            
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight uppercase">
              Hệ Thống <br />
              <span className="text-[#EEF0E5]/40">Chuyển Đổi.</span>
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed tracking-widest uppercase opacity-70 max-w-lg">
              Vượt qua giới hạn của Marketing truyền thống. Chúng tôi xây dựng cỗ máy thu hút và tự động hóa Dữ liệu, thiết kế độc bản cho mô hình High-Ticket của sếp.
            </p>
            
            <div className="flex gap-6 text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-40 pt-4">
              <span>/ Performance</span>
              <span>/ Automation</span>
              <span>/ Cinematic</span>
            </div>
          </div>

          {/* CỘT PHẢI: VŨ KHÍ HẠNG NẶNG (LEAD FORM) */}
          <div className="w-full relative">
            {/* Hiệu ứng viền phát sáng nhẹ để nổi bật Form */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#EEF0E5]/5 to-transparent blur-xl"></div>
            <div className="relative z-10">
              <LeadForm campaignName="Homepage_Hero_2026" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
