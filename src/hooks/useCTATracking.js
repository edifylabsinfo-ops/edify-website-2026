// ... các dòng import ở trên

const PricingCardContact = () => {
  // ✅ NHÚNG Ở ĐÂY (Ngay sau khi mở ngoặc hàm)
  const { track } = useCTATracking();

  const handleContact = () => {
    // Sau khi nhúng ở trên, sếp dùng nó ở đây cực gọn:
    track({
      eventName: 'Contact',
      gtmEvent: 'cta_click_contact',
      label: 'Edify Partner'
    });

    // Các logic điều hướng khác...
  };

  return (
    // ... nội dung JSX của sếp
  );
};
const utms = useUTM(); // Lấy "nguồn" khách
const { track } = useCTATracking(); // Lấy "vũ khí" bắn data

const handleRegister = () => {
  track({
    eventName: 'Lead',
    label: 'Edify Partner',
    // Nhúng luôn UTM vào tracking để Facebook/GTM biết khách từ đâu tới
    metadata: { ...utms } 
  });
};
