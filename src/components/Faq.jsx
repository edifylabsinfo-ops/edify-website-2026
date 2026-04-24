import React from 'react';

const Faq = () => {
  const faqs = [
    { q: "Edify Labs có cam kết đầu ra không?", a: "Chúng tôi tập trung vào hệ thống chuyển đổi thực tế dựa trên dữ liệu." },
    { q: "Lộ trình triển khai trong bao lâu?", a: "Thông thường từ 4-8 tuần cho một hệ thống Growth hoàn chỉnh." }
  ];

  return (
    <section className="py-24 bg-[#163020] text-[#EEF0E5]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest">FAQ</h2>
        <div className="space-y-8">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-[#EEF0E5]/10 pb-6">
              <h3 className="text-lg font-bold mb-3">/ {item.q}</h3>
              <p className="opacity-60 leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
