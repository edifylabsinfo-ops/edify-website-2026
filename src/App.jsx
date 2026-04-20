import React, { useEffect } from 'react';
import Topbar from './components/sections/Topbar';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Metrics from './components/sections/Metrics';
import Solutions from './components/sections/Solutions';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Solutions />
        
        {/* Tiếp theo sẽ là Portfolio, Quiz, Team... */}
        <section className="py-20 text-center bg-white opacity-20">
          <p className="italic text-xs tracking-widest uppercase">/ Đang tiếp tục nạp Module Video & Quiz /</p>
        </section>
      </main>
    </div>
  );
}
