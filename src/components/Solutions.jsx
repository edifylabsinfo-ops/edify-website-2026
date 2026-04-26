import React from 'react';
import { User, Building2, Check } from 'lucide-react';

const Solutions = () => {
  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5] reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] opacity-60 mb-4">Giải pháp Edify OS</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Lựa chọn Phễu của bạn</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Cá Nhân */}
          <div className="group border border-[#EEF0E5]/20 bg-black/10 p-10 hover:border-[#EEF0E5]/60 transition-all duration-500">
            <User size={32} className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-2xl font-bold mb-4 uppercase tracking-widest">Cho Cá Nhân</h4>
            <p className="opacity-70 mb-8 text-sm leading-relaxed">Dành cho Freelancer, Creator muốn xây kênh, đóng gói kỹ năng thành khóa học High-ticket.</p>
            <ul className="space-y-4 mb-10">
              {['Xây dựng Personal Brand', 'Setup hệ thống Funnel tự động', 'Hỗ trợ tài khoản Ads hạn mức cao'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm opacity-80"><Check size={16} /> {item}</li>
              ))}
            </ul>
            <button className="w-full py-4 border border-[#EEF0E5] text-xs font-bold uppercase tracking-widest group-hover:bg-[#EEF0E5] group-hover:text-[#163020] transition-colors">Tư vấn lộ trình</button>
          </div>

          {/* Card Doanh Nghiệp */}
          <div className="group border border-[#EEF0E5]/20 bg-black/10 p-10 hover:border-[#EEF0E5]/60 transition-all duration-500">
            <Building2 size={32} className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-2xl font-bold mb-4 uppercase tracking-widest">Cho Doanh Nghiệp</h4>
            <p className="opacity-70 mb-8 text-sm leading-relaxed">Hệ thống Marketing tổng thể cho SME, tối ưu CPA và tự động hóa quy trình chốt Sale.</p>
            <ul className="space-y-4 mb-10">
              {['Audit & Tối ưu chuyển đổi (CR)', 'Phòng Marketing thuê ngoài', 'Đào tạo In-house team'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm opacity-80"><Check size={16} /> {item}</li>
              ))}
            </ul>
            <button className="w-full py-4 bg-[#EEF0E5] text-[#163020] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Nhận giải pháp</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
