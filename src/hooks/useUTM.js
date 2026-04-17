import { useMemo } from 'react';

/**
 * useUTM — Phiên bản "Nồi đồng cối đá"
 * Chống lỗi Linter, chống lỗi SSR, chống lỗi Version.
 */
export const useUTM = () => {
  const utms = useMemo(() => {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    
    return keys.reduce((acc, key) => {
      const value = params.get(key);
      if (value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }, []);

  return utms;
};
// 1. Thêm import
import { useUTM } from '../hooks/useUTM';

const PricingCardContact = () => {
  const { track } = useCTATracking();
  const utms = useUTM(); // 2. Lấy "mắt thần" UTM

  const handleContact = () => {
    track({
      eventName: 'Contact',
      gtmEvent: 'cta_click_contact',
      label: 'Edify Partner',
      metadata: { ...utms } // 3. Đính kèm UTM vào tracking
    });
    // ...
  };
  // ...
