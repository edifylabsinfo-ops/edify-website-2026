import { useMemo } from 'react';

/**
 * useUTM — Trình đánh dấu nguồn khách hàng
 * Bulletproof cho cả môi trường SSR (Next.js/Vite SSR)
 */
export const useUTM = () => {
  const utms = useMemo(() => {
    // 🛡️ Kiểm tra an toàn cho môi trường Server-side
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    
    // Chỉ lấy ra khi có dữ liệu, tránh tạo object rác toàn null
    const utmObject = {
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_content: params.get("utm_content"),
      utm_term: params.get("utm_term"),
    };

    // Lọc bỏ các key bị null để data gửi về Database/Tracking "sạch" nhất
    return Object.fromEntries(
      Object.entries(utmObject).filter(([_, v]) => v != null)
    );
  }, []);

  return utms;
};
