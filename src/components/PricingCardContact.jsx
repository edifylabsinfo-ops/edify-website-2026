import React from 'react';
import PricingCard from './PricingCard'; // Gọi "vũ khí" chiều nay ra
import { useCTATracking } from '../hooks/useCTATracking';

const PricingCardContact = () => {
  const { track } = useCTATracking();

  const handleContact = () => {
    // [Conversion Hacker] — Kích hoạt tracking chuyên sâu
    track({
      eventName: 'Contact',
      gtmEvent: 'cta_click_contact',
      label: 'Edify Partner'
    });

    console.log("Redirecting to contact...");
    // window.location.href = '/booking';
  };

  return (
    <section className="bg-[#0c1910] py-12 flex justify-center">
      <PricingCard 
        name="EDIFY PARTNER"
        tagline="Phòng Marketing thuê ngoài cao cấp"
        price={15000000}
        badge="Dành cho Partner"
        benefits={[
          { id: '1', icon: 'page', label: 'Quản lý toàn diện 02 Fanpage' },
          { id: '2', icon: 'post', label: 'Sáng tạo 10 bài đăng chiến lược' },
          { id: '3', icon: 'ads',  label: 'Tối ưu Performance Ads chuyên sâu' },
        ]}
        ctaLabel="Liên Hệ Ngay"
        onCTAClick={handleContact}
      />
    </section>
  );
};

export default PricingCardContact;
