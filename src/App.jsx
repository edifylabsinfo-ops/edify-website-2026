import React, { useEffect } from 'react';
import Hero from './components/sections/Hero';

export default function App() {
  useEffect(() => {
    // Kích hoạt Plugin Reveal khi scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="bg-[#EEF0E5]">
      {/* 1. Topbar & Header (Sếp tự nhét thêm file tương tự Hero nhé) */}
      
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Portfolio, Quiz, Team... dán tiếp vào đây */}
      
      <section className="py-32 container-std text-center">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-10 reveal">
          Cỗ máy đang khởi động...
        </h2>
        <p className="opacity-50 reveal text-xs tracking-widest uppercase">
          Sếp tiếp tục dán các Section khác vào để hoàn thiện nhé!
        </p>
      </section>
    </main>
  );
}
