import { useState, useEffect } from 'react';

/**
 * Hook "Mắt thần" - Tự động bắt mọi thông số UTM từ đường dẫn URL
 * để nhét vào Database, phục vụ tối ưu Ads.
 */
export const useUTM = () => {
  const [utms, setUtms] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });

  useEffect(() => {
    // Chỉ kích hoạt khi chạy trên trình duyệt (tránh lỗi SSR nếu có)
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      
      setUtms({
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_term: searchParams.get('utm_term') || '',
        utm_content: searchParams.get('utm_content') || ''
      });
    }
  }, []);

  return utms;
};
