import React, { useEffect } from 'react';
import Topbar from './components/sections/Topbar';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';

export default function App() {
  useEffect(() => {
    // Logic "mắt thần" phát hiện scroll để hiện hiệu ứng reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Cleanup observer khi tắt trang
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      <Topbar />
      <Header />
      
      {/* Các Section được lắp ráp theo mô-đun */}
      <main className="w-full">
        <Hero />
        
        {/* Placeholder cho các module sau */}
        <section className="py-40 bg-white text-center">
          <div className="container-std">
             <h2 className="reveal text-4xl font-black uppercase tracking-widest text-[#163020]">
                Cỗ máy v2.0 <br /> Đang lên nòng.
             </h2>
             <p className="reveal mt-6 opacity-40 text-xs tracking-[0.4em] uppercase">
                / Hệ thống Modular đã sẵn sàng để "xơi" tiếp dữ liệu /
             </p>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-[#163020] text-center border-t border-white/5">
        <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase">
          © 2026 EDIFY LABS OS v2.0
        </p>
      </footer>
    </div>
  );
}
