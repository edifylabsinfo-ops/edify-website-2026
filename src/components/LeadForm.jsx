import React, { useState } from 'react';
import { useUTM } from '../hooks/useUTM';
import { useCTATracking } from '../hooks/useCTATracking';
import { submitLead } from '../leadService';
import SuccessScreen from './SuccessScreen';

export default function LeadForm({ campaignName = "Homepage_Hero_2026" }) {
  const utms = useUTM();
  const { track } = useCTATracking();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const payload = {
      full_name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      campaign: campaignName,
      ...utms
    };

    track({ eventName: 'Lead', label: campaignName });
    const response = await submitLead(payload);

    if (response.success) {
      setIsSuccess(true);
    } else {
      alert("Đường truyền tín hiệu gián đoạn. Sếp thử lại nhé!");
    }
    setLoading(false);
  };

  if (isSuccess) return <SuccessScreen />;

  return (
    <div className="w-full max-w-md bg-[#163020] border border-[#EEF0E5]/20 p-8 shadow-2xl relative overflow-hidden">
      {/* Hiệu ứng ánh sáng điện ảnh mờ góc */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF0E5]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-serif text-[#EEF0E5] mb-6 tracking-widest uppercase">
          Khởi tạo hệ thống
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] tracking-[0.2em] text-[#EEF0E5]/60 uppercase">Họ và Tên</label>
            <input 
              name="name" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder-[#EEF0E5]/20 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none"
              placeholder="VD: Nguyễn Văn A"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] tracking-[0.2em] text-[#EEF0E5]/60 uppercase">Email (Bắt buộc)</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder-[#EEF0E5]/20 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none"
              placeholder="email@doanhnghiep.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] tracking-[0.2em] text-[#EEF0E5]/60 uppercase">Số điện thoại</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder-[#EEF0E5]/20 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none"
              placeholder="09xx xxx xxx"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-8 bg-[#EEF0E5] text-[#163020] font-bold py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 disabled:opacity-50 rounded-none flex items-center justify-center gap-3"
          >
            {loading ? 'Đang mã hóa dữ liệu...' : 'Xác nhận tín hiệu'}
            {!loading && <span className="text-lg leading-none">→</span>}
          </button>
        </form>
      </div>
    </div>
  );
}
