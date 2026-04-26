import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Giả lập call API (Google Sheet / Webhook) mất 1.5s
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section className="py-32 bg-[#163020] text-[#EEF0E5] flex items-center justify-center reveal">
        <div className="text-center max-w-lg px-6">
          <CheckCircle2 size={64} className="mx-auto mb-8 text-[#EEF0E5]/80" />
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Yêu cầu đã được ghi nhận</h2>
          <p className="opacity-70 leading-relaxed text-sm">Cảm ơn bạn đã tin tưởng Edify Labs. Chuyên gia của chúng tôi sẽ phân tích dữ liệu và liên hệ lại qua số điện thoại trong vòng 24h làm việc.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#163020] text-[#EEF0E5] border-t border-[#EEF0E5]/10 reveal">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase text-center">Bắt đầu ngay hôm nay</h2>
        <p className="text-center opacity-60 mb-16 text-sm">Để lại thông tin để nhận tư vấn cấu trúc hệ thống Growth phù hợp nhất.</p>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <input type="text" required placeholder="Họ và tên của bạn" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-4 text-[#EEF0E5] placeholder-[#EEF0E5]/40 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none" />
            </div>
            <div className="relative group">
              <input type="tel" required placeholder="Số điện thoại Zalo" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-4 text-[#EEF0E5] placeholder-[#EEF0E5]/40 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none" />
            </div>
          </div>
          
          <div className="relative group">
            <input type="text" placeholder="Bạn đang gặp vấn đề lớn nhất là gì?" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-4 text-[#EEF0E5] placeholder-[#EEF0E5]/40 focus:outline-none focus:border-[#EEF0E5] transition-colors rounded-none" />
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-5 mt-8 bg-[#EEF0E5] text-[#163020] font-bold text-sm uppercase tracking-[0.2em] hover:bg-white transition-all flex justify-center items-center gap-3 disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <><Loader2 size={18} className="animate-spin" /> ĐANG XỬ LÝ...</>
            ) : (
              <>GỬI YÊU CẦU TƯ VẤN <ArrowRight size={18} /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
