import React, { useEffect } from 'react';
import { useCTATracking } from '../hooks/useCTATracking';

export default function SuccessScreen() {
  const { track } = useCTATracking();
  const ZALO_CLUB_LINK = "https://zalo.me/g/your_group_id"; // Sếp dán link Edify Club vào đây

  useEffect(() => {
    // [Tech Lead] — Tín hiệu quan trọng nhất: Báo cho Facebook khách đã đăng ký thật
    track({
      eventName: 'CompleteRegistration',
      gtmEvent: 'lead_success_landing',
      value: 50000, // Giá trị ước tính của 1 Lead để AI Facebook tối ưu
      label: 'Edify Success Page'
    });
  }, [track]);

  return (
    <div className="fixed inset-0 z-50 bg-[#163020] flex flex-col items-center justify-center p-6 text-center">
      {/* Cinematic Accent */}
      <div className="w-24 h-[1px] bg-[#EEF0E5]/30 mb-8" />
      
      <h1 className="font-serif text-4xl md:text-6xl text-[#EEF0E5] mb-4 tracking-tight">
        TÍN HIỆU ĐÃ NHẬN
      </h1>
      
      <p className="text-[#EEF0E5]/60 text-sm md:text-base max-w-md mb-12 tracking-widest uppercase">
        Đội ngũ Edify Labs đang phân tích dữ liệu của sếp. <br /> 
        Chúng tôi sẽ liên hệ trong vòng 24h làm việc.
      </p>

      {/* Retention CTA */}
      <div className="space-y-6 w-full max-w-sm">
        <a 
          href={ZALO_CLUB_LINK}
          target="_blank"
          rel="noreferrer"
          className="block w-full bg-[#EEF0E5] text-[#163020] py-4 font-bold text-xs tracking-[0.2em] hover:bg-[#304D30] hover:text-[#EEF0E5] transition-all"
        >
          GIA NHẬP CREATORS GROWTH CLUB (ZALO)
        </a>
        
        <p className="text-[10px] text-[#EEF0E5]/40 italic">
          * Nơi cập nhật kiến thức DaVinci Resolve & Livestream độc quyền.
        </p>
      </div>

      <div className="w-24 h-[1px] bg-[#EEF0E5]/30 mt-12" />
    </div>
  );
}
