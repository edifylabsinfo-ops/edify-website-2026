import React, { useEffect } from 'react';
import { useCTATracking } from '../hooks/useCTATracking';

export default function SuccessScreen() {
  const { track } = useCTATracking();
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
    <div className="fixed inset-0 z-50 bg-[#163020] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-[1px] bg-[#EEF0E5]/30 mb-8" />
      <h1 className="font-serif text-4xl md:text-6xl text-[#EEF0E5] mb-4 tracking-tight">TÍN HIỆU ĐÃ NHẬN</h1>
      <p className="text-[#EEF0E5]/60 text-sm max-w-md mb-12 tracking-widest uppercase">
        Chúng tôi sẽ liên hệ trong vòng 24h làm việc.
      </p>
      <div className="w-full max-w-sm">
        <a href={ZALO_LINK} target="_blank" rel="noreferrer" 
           className="block w-full bg-[#EEF0E5] text-[#163020] py-4 font-bold text-xs tracking-[0.2em] hover:bg-[#304D30] hover:text-[#EEF0E5] transition-all">
          GIA NHẬP CREATORS GROWTH CLUB (ZALO)
        </a>
      </div>
      <div className="w-24 h-[1px] bg-[#EEF0E5]/30 mt-12" />
    </div>
  );
}
