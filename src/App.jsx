import React, { useEffect } from 'react';
import Topbar from './components/sections/Topbar';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';

export default function App() {
  useEffect(() => {
    // Kích hoạt Reveal cho toàn trang
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <main>
      <Topbar />
      <Header />
      <Hero />
      
      {/* Các section tiếp theo sẽ được "xơi" ở lượt sau sếp nhé! */}
      <div className="bg-[#EEF0E5] py-20 text-center">
        <p className="reveal text-[10px] tracking-widest uppercase opacity-30 italic">
          / Đang nạp tiếp các Module dữ liệu...
        </p>
      </div>
    </main>
  );
}
