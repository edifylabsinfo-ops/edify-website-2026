import React, { useState, useEffect, useRef } from 'react';
import LeadForm from './components/LeadForm';

// --- SUB-COMPONENTS ---

const NavItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-all py-4">
        {title} {children && <span className="text-[8px]">▼</span>}
      </button>
      {children && isOpen && (
        <div className="absolute top-full left-0 w-64 bg-[#163020] border border-[#EEF0E5]/10 p-4 z-50 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#EEF0E5]/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left group">
        <span className={`text-sm md:text-base font-serif uppercase tracking-widest transition-all ${isOpen ? 'text-[#EEF0E5]' : 'text-[#EEF0E5]/60'}`}>
          {question}
        </span>
        <span className="text-xl opacity-30 group-hover:opacity-100">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-[12px] tracking-widest uppercase leading-relaxed text-[#EEF0E5]/50 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);

  // Logic Particle Canvas (Hồi sinh từ bản cũ)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let pts = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(238, 240, 229, 0.15)';
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(238, 240, 229, ${0.1 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#163020] text-[#EEF0E5] font-sans selection:bg-[#EEF0E5] selection:text-[#163020]">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${scrolled ? 'bg-[#163020]/95 backdrop-blur-md border-b border-[#EEF0E5]/10 py-4' : 'bg-transparent'}`}>
        <div className="text-xl font-serif tracking-[0.4em] uppercase font-bold">Edify Labs.</div>
        <div className="hidden lg:flex gap-10">
          <NavItem title="Dịch vụ">
            <div className="space-y-4 text-[10px] tracking-widest uppercase">
              <a href="#" className="block opacity-60 hover:opacity-100">/ Agency</a>
              <a href="#" className="block opacity-60 hover:opacity-100">/ Studio Production</a>
              <a href="#" className="block opacity-60 hover:opacity-100">/ E-Learning Platform</a>
            </div>
          </NavItem>
          <NavItem title="Giải pháp" />
          <NavItem title="Về chúng tôi" />
        </div>
        <button className="bg-[#EEF0E5] text-[#163020] px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all rounded-none">
          Bắt đầu ngay
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div className="w-12 h-[1px] bg-[#EEF0E5]/40"></div>
            <h1 className="text-6xl md:text-8xl font-serif leading-none uppercase tracking-tighter">
              Học để làm.<br />
              <span className="text-[#EEF0E5]/30 italic">Làm để đo.</span><br />
              Đo để tối ưu.
            </h1>
            <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase leading-relaxed opacity-60 max-w-md">
              Hệ sinh thái đào tạo và thực thi Digital Marketing dựa trên dữ liệu thật. Thiết kế cho doanh nghiệp High-ticket.
            </p>
            <div className="flex gap-12 pt-6">
              <div><div className="text-3xl font-serif">3.2x</div><div className="text-[8px] tracking-widest uppercase opacity-40">Avg. ROAS</div></div>
              <div><div className="text-3xl font-serif">+2000</div><div className="text-[8px] tracking-widest uppercase opacity-40">Students</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-[#EEF0E5]/5 blur-[120px] rounded-full"></div>
            <LeadForm campaignName="Rebuild_Homepage_2026" />
          </div>
        </div>
      </section>

      {/* 4 VIDEO FORMATS SECTION (THE CORE) */}
      <section className="py-32 border-y border-[#EEF0E5]/10 bg-[#12281a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">4 Dòng Video <span className="text-[#EEF0E5]/30">Thống Trị.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EEF0E5]/10 border border-[#EEF0E5]/10">
            {[
              { id: '01', title: 'Talking Head', desc: 'Xây dựng uy tín chuyên gia' },
              { id: '02', title: 'Cinematic', desc: 'Đỉnh cao tư duy thẩm mỹ' },
              { id: '03', title: 'Vlog Story', desc: 'Nghệ thuật kể chuyện' },
              { id: '04', title: 'Short Viral', desc: 'Làm chủ cuộc chơi tương tác' }
            ].map(item => (
              <div key={item.id} className="bg-[#163020] p-10 space-y-12 hover:bg-[#EEF0E5] hover:text-[#163020] transition-all duration-700 group">
                <div className="text-4xl font-serif opacity-10 group-hover:opacity-100">{item.id}</div>
                <div>
                  <h4 className="text-lg font-serif uppercase tracking-widest mb-3">{item.title}</h4>
                  <p className="text-[10px] tracking-widest uppercase opacity-50 group-hover:opacity-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif uppercase">Đội ngũ <br /> Thực chiến.</h2>
            <p className="text-[10px] tracking-widest uppercase opacity-40 leading-loose">
              Chúng tôi không phải những nhà lý thuyết. Mỗi chuyên gia tại Edify Labs đều đang trực tiếp vận hành ngân sách Ads hàng tỷ đồng mỗi tháng.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-[#EEF0E5]/5 border border-[#EEF0E5]/10 grayscale hover:grayscale-0 transition-all duration-1000 flex items-center justify-center text-[8px] tracking-[0.5em] uppercase opacity-20">[ Photo: Lê Thanh Phong ]</div>
              <div>
                <h4 className="font-serif uppercase tracking-widest">Lê Thanh Phong</h4>
                <p className="text-[9px] tracking-widest uppercase opacity-40 italic">Founder & CEO / Growth Strategy</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-[#EEF0E5]/5 border border-[#EEF0E5]/10 grayscale hover:grayscale-0 transition-all duration-1000 flex items-center justify-center text-[8px] tracking-[0.5em] uppercase opacity-20">[ Photo: Data Expert ]</div>
              <div>
                <h4 className="font-serif uppercase tracking-widest">Trần Minh Tuấn</h4>
                <p className="text-[9px] tracking-widest uppercase opacity-40 italic">Performance Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 bg-[#12281a] border-t border-[#EEF0E5]/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif uppercase tracking-widest mb-16 text-center">Hỏi đáp.</h2>
          <FAQItem question="Khóa học có phù hợp cho người mới?" answer="Quy trình đào tạo tại Edify Labs được thiết kế theo lộ trình 'Cầm tay chỉ việc', giúp người mới bắt đầu có thể tạo ra kết quả thực tế ngay trong tuần đầu tiên." />
          <FAQItem question="Tôi sẽ nhận được gì sau khóa học?" answer="Hệ thống tư duy Performance, bộ Portfolio video chuẩn cinematic và chứng chỉ xác nhận năng lực thực chiến từ Edify Labs." />
          <FAQItem question="Hình thức hỗ trợ học viên?" answer="Hệ thống Mentor 1-1 hỗ trợ trực tiếp qua group kín và các buổi Live Workshop hàng tuần để xử lý vấn đề thực tế." />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-[#EEF0E5]/10 text-center">
        <div className="text-3xl font-serif tracking-[0.5em] uppercase mb-10">Edify Labs.</div>
        <div className="flex justify-center gap-8 text-[10px] tracking-[0.2em] uppercase opacity-30 mb-10">
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <a href="#">Zalo</a>
          <a href="#">Youtube</a>
        </div>
        <div className="text-[8px] tracking-[0.4em] uppercase opacity-20">
          © 2026 EDIFY LABS TRAINING & CONSULTING. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
