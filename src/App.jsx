import React from 'react';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#163020] text-[#EEF0E5] font-sans selection:bg-[#EEF0E5] selection:text-[#163020]">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#163020]/90 backdrop-blur-md border-b border-[#EEF0E5]/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-serif tracking-[0.3em] uppercase font-bold">Edify Labs.</div>
        <div className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase opacity-70">
          <a href="#solutions" className="hover:text-white transition-colors">Giải Pháp</a>
          <a href="#content" className="hover:text-white transition-colors">Chìa Khóa Content</a>
          <a href="#team" className="hover:text-white transition-colors">Chuyên Gia</a>
          <a href="#faq" className="hover:text-white transition-colors">Hỏi Đáp</a>
        </div>
      </nav>

      {/* 2. HERO SECTION (Học để làm...) */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-block border border-[#EEF0E5]/30 px-4 py-1 text-[10px] tracking-[0.3em] uppercase opacity-60">
            Nền tảng học tập thế hệ mới
          </div>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] uppercase tracking-tighter">
            Học để làm.<br />
            <span className="text-[#EEF0E5]/30 italic">Làm để đo.</span><br />
            Đo để tối ưu.
          </h1>
          <p className="text-sm md:text-base leading-relaxed tracking-widest uppercase opacity-60 max-w-lg">
            Edify Labs thiết kế hệ sinh thái giúp doanh nghiệp tạo ra kết quả thật từ nội dung và quảng cáo số.
          </p>
          {/* STATS MINI */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[#EEF0E5]/10">
            <div>
              <div className="text-2xl font-serif">3.2x</div>
              <div className="text-[8px] tracking-widest uppercase opacity-40">ROAS Trung Bình</div>
            </div>
            <div>
              <div className="text-2xl font-serif">+2000</div>
              <div className="text-[8px] tracking-widest uppercase opacity-40">Học Viên</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#EEF0E5]/5 blur-2xl"></div>
          <LeadForm campaignName="Home_Rebuild_2026" />
        </div>
      </section>

      {/* 3. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 border-t border-[#EEF0E5]/10 bg-[#12281a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-3xl font-serif uppercase tracking-widest mb-4">Giải pháp đào tạo</h2>
            <div className="w-20 h-[1px] bg-[#EEF0E5]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EEF0E5]/10 border border-[#EEF0E5]/10">
            <div className="bg-[#163020] p-12 space-y-6">
              <h3 className="text-xl font-serif uppercase tracking-widest text-[#EEF0E5]/50">Dành cho Cá Nhân</h3>
              <ul className="space-y-4 text-xs tracking-[0.2em] uppercase opacity-70">
                <li>/ Performance Ads Optimization</li>
                <li>/ Data & Analytics Tracking</li>
                <li>/ High-ticket Content Creation</li>
              </ul>
            </div>
            <div className="bg-[#163020] p-12 space-y-6">
              <h3 className="text-xl font-serif uppercase tracking-widest text-[#EEF0E5]/50">Dành cho Doanh Nghiệp</h3>
              <ul className="space-y-4 text-xs tracking-[0.2em] uppercase opacity-70">
                <li>/ Custom Enterprise Training</li>
                <li>/ Team Gap Analysis</li>
                <li>/ Digital Transformation Roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHÌA KHÓA CONTENT (4 Dòng Video) */}
      <section id="content" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter">4 Dòng Video Thống Trị</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">Thực thi & Sở hữu bộ Portfolio triệu đô</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { id: '01', title: 'Talking Head', desc: 'Xây dựng uy tín chuyên gia' },
            { id: '02', title: 'Cinematic', desc: 'Đỉnh cao tư duy thẩm mỹ' },
            { id: '03', title: 'Vlog Story', desc: 'Nghệ thuật kể chuyện cảm xúc' },
            { id: '04', title: 'Short Viral', desc: 'Làm chủ cuộc chơi tương tác' }
          ].map((item) => (
            <div key={item.id} className="border border-[#EEF0E5]/10 p-8 hover:bg-[#EEF0E5] hover:text-[#163020] transition-all duration-500 group cursor-default">
              <div className="text-3xl font-serif mb-12 opacity-20 group-hover:opacity-100">{item.id}</div>
              <h4 className="text-lg font-serif uppercase mb-4 tracking-widest">{item.title}</h4>
              <p className="text-[10px] tracking-widest uppercase opacity-60 group-hover:opacity-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM EXPERTS */}
      <section id="team" className="py-24 bg-[#12281a] border-y border-[#EEF0E5]/10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif uppercase leading-none">Chuyên Gia <br /> Thực Chiến</h2>
            <p className="text-xs tracking-widest uppercase opacity-40">Không lý thuyết suông. Chúng tôi trực tiếp chinh chiến mỗi ngày.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <div className="aspect-[4/5] bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700"></div>
                <h4 className="font-serif uppercase tracking-widest">Lê Thanh Phong</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-50 italic">Founder & CEO / Growth Strategy</p>
             </div>
             <div className="space-y-4">
                <div className="aspect-[4/5] bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700"></div>
                <h4 className="font-serif uppercase tracking-widest">Trần Minh Tuấn</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-50 italic">Performance Director / Data Expert</p>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 md:px-12 text-center border-t border-[#EEF0E5]/10">
        <div className="text-3xl font-serif tracking-[0.5em] uppercase mb-8">Edify Labs</div>
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30">
          © 2026 EDIFY LABS TRAINING & CONSULTING. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
