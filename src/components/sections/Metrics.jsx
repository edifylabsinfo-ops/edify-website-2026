import React, { useEffect, useState } from 'react';

export default function Metrics() {
  const [counts, setCounts] = useState({ students: 0, roas: 0, satisfaction: 0, partners: 0 });

  useEffect(() => {
    // Logic nhảy số chuẩn source cũ
    const animate = (target, key, duration = 2000) => {
      let start = 0;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCounts(prev => ({ ...prev, [key]: Math.floor(progress * target) }));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animate(568, 'students');
        animate(98, 'satisfaction');
        animate(5, 'partners');
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    const el = document.getElementById('metrics-section');
    if (el) observer.observe(el);
  }, []);

  return (
    <div id="metrics-wrapper" className="sticky top-[100px] z-[2] w-full">
      <section id="metrics-section" className="bg-[#1E3A28] py-14 border-y border-white/5 transition-all duration-500">
        <div className="container-std grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="reveal">
            <div className="text-4xl md:text-5xl font-black text-white">{counts.students}+</div>
            <div className="text-[10px] tracking-[0.2em] text-[#B6C4B6] uppercase mt-2 font-bold">Học viên</div>
          </div>
          <div className="reveal">
            <div className="text-4xl md:text-5xl font-black text-[#B6C4B6]">3.2x</div>
            <div className="text-[10px] tracking-[0.2em] text-white/50 uppercase mt-2 font-bold">ROAS Trung Bình</div>
          </div>
          <div className="reveal">
            <div className="text-4xl md:text-5xl font-black text-white">{counts.satisfaction}%</div>
            <div className="text-[10px] tracking-[0.2em] text-[#B6C4B6] uppercase mt-2 font-bold">Hài lòng</div>
          </div>
          <div className="reveal">
            <div className="text-4xl md:text-5xl font-black text-white">{counts.partners}+</div>
            <div className="text-[10px] tracking-[0.2em] text-[#B6C4B6] uppercase mt-2 font-bold">Đối tác</div>
          </div>
        </div>
      </section>
    </div>
  );
}
