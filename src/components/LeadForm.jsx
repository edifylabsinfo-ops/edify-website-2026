import React, { useState } from 'react';
import { useUTM } from '../hooks/useUTM';
import { useCTATracking } from '../hooks/useCTATracking';
import { submitLead } from '../services/leadService';
import SuccessScreen from './SuccessScreen';

/**
 * LeadForm — Trái tim của hệ thống chuyển đổi Edify Labs.
 * Tích hợp: UTM Tracking, Meta Pixel, GTM và Supabase.
 */
export default function LeadForm({ campaignName = "Edify Partner" }) {
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
      ...utms // Gắn thẻ nguồn UTM vào Lead
    };

    // 1. [Performance] — Bắn event Lead khởi đầu
    track({ 
      eventName: 'Lead', 
      gtmEvent: 'form_submit_start',
      label: campaignName, 
      value: 0 
    });

    // 2. [Database] — Lưu vào Supabase
    const response = await submitLead(payload);
    
    if (response.success) {
      // 3. [Success Logic] — Kích hoạt màn hình thành công & Tracking Purchase
      setIsSuccess(true);
    } else {
      alert("⚠️ Hệ thống đang bận. Sếp vui lòng thử lại sau hoặc liên hệ trực tiếp Fanpage!");
    }
    
    setLoading(false);
  };

  // ✅ Nếu gửi thành công, che toàn bộ Form bằng trang Cảm ơn
  if (isSuccess) {
    return <SuccessScreen />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="bg-[#163020] p-8 md:p-10 border border-[#EEF0E5]/10 rounded-none shadow-2xl"
      >
        <div className="mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-[#EEF0E5] mb-2 tracking-tight uppercase">
            Đăng ký tư vấn
          </h3>
          <p className="text-[#EEF0E5]/50 text-[10px] tracking-[0.2em] uppercase">
            Khởi động chiến dịch của sếp ngay hôm nay
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="group">
            <label className="block text-[10px] text-[#EEF0E5]/40 mb-1 ml-1 tracking-widest uppercase">Họ và tên</label>
            <input 
              name="name" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5] transition-all rounded-none" 
            />
          </div>

          <div className="group">
            <label className="block text-[10px] text-[#EEF0E5]/40 mb-1 ml-1 tracking-widest uppercase">Email doanh nghiệp</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5] transition-all rounded-none" 
            />
          </div>

          <div className="group">
            <label className="block text-[10px] text-[#EEF0E5]/40 mb-1 ml-1 tracking-widest uppercase">Số điện thoại (Zalo)</label>
            <input 
              name="phone" 
              required 
              className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5] transition-all rounded-none" 
            />
          </div>
        </div>

        <button 
          disabled={loading}
          className="mt-10 w-full bg-[#EEF0E5] text-[#163020] font-bold py-5 text-xs tracking-[0.3em] uppercase hover:bg-[#304D30] hover:text-[#EEF0E5] transition-all disabled:opacity-50 rounded-none"
        >
          {loading ? "Đang xử lý dữ liệu..." : "Xác nhận tín hiệu"}
        </button>

        <p className="mt-6 text-[9px] text-[#EEF0E5]/30 text-center uppercase tracking-widest leading-relaxed">
          Bằng cách nhấn xác nhận, sếp đồng ý với <br /> chính sách bảo mật của Edify Labs.
        </p>
      </form>
    </div>
  );
}
