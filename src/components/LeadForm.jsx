import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập call API Webhook mất 2 giây
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5] border-t border-[#EEF0E5]/10 reveal relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Sẵn Sàng Bứt Phá?</h2>
          <p className="opacity-60 text-sm">Để lại thông tin, chuyên gia Growth của Edify sẽ phân tích hệ thống của bạn hoàn toàn miễn phí.</p>
        </div>

        {isSuccess ? (
          <div className="bg-[#EEF0E5]/5 border border-[#EEF0E5]/20 p-12 text-center animate-in fade-in duration-700">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-[#EEF0E5]">Yêu cầu đã được ghi nhận</h3>
            <p className="opacity-60 text-sm">Chuyên gia của Edify Labs sẽ liên hệ với bạn trong vòng 24 giờ tới.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <input required type="text" placeholder="Họ và tên *" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder:text-[#EEF0E5]/30 focus:outline-none focus:border-[#EEF0E5] transition-colors" />
              </div>
              <div className="relative">
                <input required type="tel" placeholder="Số điện thoại *" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder:text-[#EEF0E5]/30 focus:outline-none focus:border-[#EEF0E5] transition-colors" />
              </div>
            </div>
            
            <div className="relative">
              <input type="url" placeholder="Link Website / Fanpage (Nếu có)" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder:text-[#EEF0E5]/30 focus:outline-none focus:border-[#EEF0E5] transition-colors" />
            </div>

            <div className="relative">
              <textarea required rows="1" placeholder="Vấn đề lớn nhất bạn đang gặp phải là gì?" className="w-full bg-transparent border-b border-[#EEF0E5]/30 py-3 text-[#EEF0E5] placeholder:text-[#EEF0E5]/30 focus:outline-none focus:border-[#EEF0E5] transition-colors resize-none overflow-hidden"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#EEF0E5] text-[#163020] py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors disabled:opacity-70 flex justify-center items-center gap-3"
            >
              {isSubmitting ? (
                <> <Loader2 className="animate-spin" size={20} /> Đang xử lý... </>
              ) : (
                "Gửi Yêu Cầu Tư Vấn"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadForm;
