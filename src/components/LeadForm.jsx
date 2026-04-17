import React, { useState } from 'react';
import { useUTM } from '../hooks/useUTM';
import { useCTATracking } from '../hooks/useCTATracking';
import { submitLead } from '../leadService'; // ✅ Fix: Đưa về đúng thư mục src/
import SuccessScreen from './SuccessScreen';

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
      ...utms
    };

    track({ eventName: 'Lead', label: campaignName });
    const response = await submitLead(payload);
    
    if (response.success) {
      setIsSuccess(true);
    } else {
      alert("Lỗi gửi dữ liệu. Sếp kiểm tra lại kết nối Supabase nhé!");
    }
    setLoading(false);
  };

  if (isSuccess) return <SuccessScreen />;

  return (
    <form onSubmit={handleSubmit} className="bg-[#163020] p-8 border border-[#EEF0E5]/10 max-w-md mx-auto">
      <h3 className="font-serif text-2xl text-[#EEF0E5] mb-6 uppercase">Đăng ký tư vấn</h3>
      <div className="space-y-6">
        <input name="name" placeholder="HỌ VÀ TÊN" required className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5]" />
        <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5]" />
        <input name="phone" placeholder="SỐ ĐIỆN THOẠI" required className="w-full bg-transparent border-b border-[#EEF0E5]/20 p-3 text-[#EEF0E5] outline-none focus:border-[#EEF0E5]" />
        <button disabled={loading} className="w-full bg-[#EEF0E5] text-[#163020] font-bold py-4 text-xs tracking-[0.2em] hover:bg-[#304D30] hover:text-[#EEF0E5] transition-all">
          {loading ? "ĐANG GỬI..." : "XÁC NHẬN TÍN HIỆU"}
        </button>
      </div>
    </form>
  );
}
