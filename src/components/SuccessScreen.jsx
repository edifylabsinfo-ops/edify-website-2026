import React, { useEffect } from 'react';
import { useCTATracking } from '../hooks/useCTATracking';

export default function SuccessScreen() {
  const { track } = useCTATracking();
  // Link Zalo gốc của sếp
  const ZALO_LINK = "https://zalo.me/691204985516497917";

  useEffect(() => {
    track({
      eventName: 'CompleteRegistration',
      gtmEvent: 'lead_success',
      value: 50000,
      label: 'Edify Success'
    });
  }, [track]);

  return (
    <div className="w-full max-w-md bg-[#163020] border border-[#EEF0E5]/20 p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] text-center">
      {/* Hiệu ứng ánh sáng điện ảnh mờ */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#EEF0E5]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#EEF0E5]/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 w-full space-y-6">
        <div className="w-16 h-[1px] bg-[#EEF0E5]/50 mx-auto"></div>

        <h3 className="text-3xl font-serif text-[#EEF0E5] tracking-widest uppercase leading-tight">
          Tín Hiệu <br /> Đã Nhận
        </h3>

        <p className="text-[10px] tracking-[0.2em] text-[#EEF0E5]/60 uppercase leading-relaxed mx-auto max-w-xs">
          Hệ thống đã ghi nhận dữ liệu. <br />
          Chúng tôi sẽ liên hệ để khởi tạo cỗ máy trong 24h tới.
        </p>

        <a 
          href={ZALO_LINK} 
          target="_blank" 
          rel="noreferrer"
          className="w-full block mt-8 bg-[#EEF0E5] text-[#163020] font-bold py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 rounded-none border-none"
        >
          KẾT NỐI ZALO TRỰC TIẾP →
        </a>
      </div>
    </div>
  );
}
