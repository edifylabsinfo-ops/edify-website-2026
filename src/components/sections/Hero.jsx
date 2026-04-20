import React, { useRef } from 'react';
import { useCanvasEffect } from '../../hooks/useCanvasEffect';

export default function Hero() {
  const canvasRef = useRef(null);
  useCanvasEffect(canvasRef);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#163020] overflow-hidden w-full">
      {/* Lớp hạt bay bay chuẩn source cũ */}
      <canvas ref={canvasRef} id="heroCanvas" className="absolute inset-0 z-0 w-full h-full" />
      
      {/* Lớp Gradient phủ để text luôn nổi bật */}
      <div className="absolute inset-0 z-1 bg-radial-gradient(ellipse 70% 60% at 30% 50%,rgba(48,77,48,0.18) 0%,transparent 65%) opacity-60"></div>
      
      <div className="container-std relative z-10 text-center">
        <div className="reveal inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#B6C4B6] animate-pulse rounded-full" />
          <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase font-bold">Nền tảng học tập thế hệ mới · Edify Labs</span>
        </div>
        
        <h1 className="text-white text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter uppercase mb-8 reveal">
          Học để làm.<br />
          Làm để <span className="bg-gradient-to-r from-[#B6C4B6] to-[#304D30] bg-clip-text text-transparent">đo lường.</span><br />
          Đo để tối ưu.
        </h1>
        
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12 reveal">
          Edify Labs thiết kế hệ sinh thái học – làm – tối ưu, giúp cá nhân và doanh nghiệp tạo ra kết quả thật từ nội dung và quảng cáo số.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 reveal">
          <button className="bg-[#304D30] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#4B734B] transition-all">
            Trải nghiệm ngay →
          </button>
          <button className="border border-white/25 text-white px-10 py-4 font-bold uppercase tracking-widest hover:border-white/50 transition-all">
            Tư vấn miễn phí
          </button>
        </div>
      </div>
    </section>
  );
}
