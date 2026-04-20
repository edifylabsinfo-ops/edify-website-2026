import { useCallback } from 'react';

/**
 * useCTATracking - Phiên bản bọc thép (Safe-Mode)
 * Ngăn chặn tuyệt đối lỗi undefined khi gọi hàm.
 */
export function useCTATracking() {
  const track = useCallback((options = {}) => { // ✅ Fix: Thêm = {} để chống lỗi undefined
    // Chốt chặn 1: Kiểm tra môi trường Browser
    if (typeof window === 'undefined') return;

    const {
      eventName = 'Lead',
      gtmEvent = 'cta_click',
      value,
      currency = 'VND',
      label
    } = options;

    // 1. Meta Pixel Tracking
    if (typeof window.fbq === 'function') {
      const fbParams = {};
      if (value !== undefined && value !== null) {
        fbParams.value = value;
        fbParams.currency = currency;
      }
      if (label) {
        fbParams.content_name = label;
      }
      window.fbq('track', eventName, fbParams);
    }

    // 2. GTM dataLayer Tracking
    if (Array.isArray(window.dataLayer)) {
      const gtmParams = { event: gtmEvent };
      if (value !== undefined && value !== null) {
        gtmParams.value = value;
        gtmParams.currency = currency;
      }
      if (label) {
        gtmParams.label = label;
      }
      window.dataLayer.push(gtmParams);
    }
  }, []);

  return { track };
}
