import React, { useEffect } from 'react';
import Topbar from './components/sections/Topbar';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Metrics from './components/sections/Metrics';
import Solutions from './components/sections/Solutions';
import Portfolio from './components/sections/Portfolio';

export default function App() {
  useEffect(() => {
    // Logic Reveal toàn trang chuẩn source gốc
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#EEF0E5]">
      <Topbar />
      <Header />
      <main className="w-full overflow-hidden">
        <Hero />
        <Metrics />
        <Solutions />
        <Portfolio />
        
        {/* Module FAQ & Team sẽ lên nòng ở lượt tới sếp nhé! */}
      </main>
      <footer className="py-10 bg-[#163020] text-center text-white/20 text-[10px] tracking-widest">
        © 2026 EDIFY LABS TRAINING AND CONSULTING. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
