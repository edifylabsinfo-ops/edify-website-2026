import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-[36px] left-0 right-0 z-[1000] transition-all duration-300 w-full ${isScrolled ? 'bg-[#EEF0E5]/97 backdrop-blur-md border-b border-[#B6C4B6] shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-std h-[64px] flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-[10px] no-underline">
          <div className="w-9 h-9 bg-[#163020] flex items-center justify-center relative overflow-hidden">
            <span className="text-white font-extrabold text-[15px]">E</span>
            <div className="absolute bottom-0 right-0 w-[14px] h-[14px] bg-[#304D30]"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-[15px] font-extrabold transition-colors duration-300 ${isScrolled ? 'text-[#163020]' : 'text-white'}`}>Edify Labs</span>
            <span className="text-[8.5px] font-semibold text-white/40 tracking-[0.14em] uppercase mt-1">From Knowledge to Execution</span>
          </div>
        </a>

        {/* LINKS */}
        <div className="hidden lg:flex items-center gap-1">
          {['Trang Chủ', 'Dịch Vụ', 'Giải Pháp', 'Giới Thiệu', 'Blog'].map((item) => (
            <a key={item} href="#" className={`text-[13px] font-semibold px-[14px] py-2 no-underline transition-colors ${isScrolled ? 'text-[#465946] hover:text-[#163020]' : 'text-white/80 hover:text-white'}`}>
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-[10px]">
          <a href="#" className={`text-[13px] font-semibold px-4 hidden md:block no-underline ${isScrolled ? 'text-[#465946]' : 'text-white/75'}`}>Đăng Nhập</a>
          <button className="bg-[#304D30] text-white text-[13px] font-bold px-5 py-[9px] border-none rounded-none hover:bg-[#4B734B] transition-all tracking-wide">
            Bắt Đầu Miễn Phí
          </button>
        </div>
      </nav>
    </header>
  );
}
