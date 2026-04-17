import React, { useState } from 'react';
import { useUTM } from '../hooks/useUTM';
import { useCTATracking } from '../hooks/useCTATracking';
import { submitLead } from '../services/leadService';

export default function LeadForm({ campaignName = "General" }) {
  const utms = useUTM();
  const { track } = useCTATracking();
  const [loading, setLoading] = useState(false);

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

    // 1. Bắn tracking
    track({ eventName: 'Lead', label: campaignName, value: 0 });

    // 2. Lưu vào Database
    const response = await submitLead(payload);
    
    if (response.success) {
      alert("Edify Labs đã nhận tín hiệu. Chúng tôi sẽ liên hệ sếp sớm nhất!");
      e.target.reset();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#163020] p-8 border border-[#EEF0E5]/20 max-w-md mx-auto">
      <h3 className="font-serif text-2xl text-[#EEF0E5] mb-6">ĐỂ LẠI TÍN HIỆU</h3>
      
      <input name="name" placeholder="HỌ VÀ TÊN" required className="w-full bg-transparent border-b border-[#EEF0E5]/30 p-3 text-[#EEF0E5] mb-4 outline-none focus:border-[#EEF0E5] transition-all" />
      <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-[#EEF0E5]/30 p-3 text-[#EEF0E5] mb-4 outline-none focus:border-[#EEF0E5] transition-all" />
      <input name="phone" placeholder="SỐ ĐIỆN THOẠI" required className="w-full bg-transparent border-b border-[#EEF0E5]/30 p-3 text-[#EEF0E5] mb-8 outline-none focus:border-[#EEF0E5] transition-all" />

      <button 
        disabled={loading}
        className="w-full bg-[#EEF0E5] text-[#163020] font-bold py-4 letter-spacing-widest hover:bg-[#304D30] hover:text-[#EEF0E5] transition-all disabled:opacity-50"
      >
        {loading ? "ĐANG GỬI..." : "XÁC NHẬN ĐĂNG KÝ"}
      </button>
    </form>
  );
}
