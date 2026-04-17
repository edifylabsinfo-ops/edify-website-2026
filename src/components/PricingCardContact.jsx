import React from 'react';

const PricingCardContact = () => {
  const data = {
    name: "EDIFY PARTNER",
    benefits: [
      "Quản lý toàn diện 02 Fanpage",
      "Sáng tạo 10 bài đăng chiến lược/tháng",
      "Tối ưu hóa Performance Ads chuyên sâu"
    ]
  };

  const handleContact = () => {
    // [Step 6 - Tracking Updated]
    // Meta Pixel - Chuyển sang sự kiện Contact
    if (window.fbq) {
      fbq('track', 'Contact', {
        content_name: 'Edify Partner'
      });
    }

    // GTM DataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click_contact',
      package_id: 'edify_partner'
    });

    console.log("Redirecting to contact/booking form...");
    // window.location.href = '/booking'; // Ví dụ link điều hướng
  };

  return (
    <div className="flex items-center justify-center p-8 bg-[#0c1910] min-h-[400px]">
      <div className="w-full max-w-sm bg-[#163020] border border-[#EEF0E5]/10 p-10 rounded-none shadow-2xl relative overflow-hidden group flex flex-col justify-between h-full min-h-[350px]">
        {/* Cinematic Light Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#304D30]/20 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-[#304D30]/40 transition-all duration-500"></div>
        
        <div>
          <h3 className="text-[#EEF0E5]/60 text-sm font-bold tracking-[0.2em] mb-10 font-['Montserrat']">
            {data.name}
          </h3>
          
          {/* Mức giá đã được gỡ bỏ theo yêu cầu */}

          <ul className="space-y-4 mb-12">
            {data.benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#EEF0E5]/80 text-sm leading-relaxed font-['Montserrat']">
                <span className="text-[#304D30] font-bold">/</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleContact}
          className="w-full py-4 bg-[#304D30] text-[#EEF0E5] font-bold text-sm tracking-widest uppercase rounded-none hover:bg-[#3a5c3a] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#163020]"
        >
          Liên Hệ Ngay
        </button>
      </div>
    </div>
  );
};

export default PricingCardContact;
