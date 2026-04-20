import React from 'react';

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] bg-[#163020] h-[36px] flex items-center justify-center w-full">
      <div className="container-std flex items-center justify-between w-full">
        <div className="flex items-center gap-5">
          <a href="https://www.edifylabs.vn/livestream" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-white flex items-center gap-[6px] no-underline tracking-wider">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" fill="#B6C4B6"></path></svg>
            Khoá học mới: TikTok Livestream Master 2026
          </a>
          <span className="text-white/20 hidden md:block">·</span>
          <a href="https://www.edifylabs.vn/livestream" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-[#B6C4B6] no-underline hidden md:block animate-pulse">
            Xem ngay →
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px] font-semibold text-white/40 tracking-widest">
          <span className="text-[#B6C4B6]">VI</span>
          <span className="opacity-20">|</span>
          <span>EN</span>
        </div>
      </div>
    </div>
  );
}
