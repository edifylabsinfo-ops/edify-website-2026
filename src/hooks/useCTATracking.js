import { useCallback } from 'react';

/**
 * useCTATracking — Vũ khí tối thượng của Edify Labs
 * Dùng để bắn dữ liệu sang Meta Pixel và GTM cùng lúc.
 */
export function useCTATracking() {
  const track = useCallback(({ 
    eventName = 'Lead', 
    gtmEvent = 'cta_click', 
    value, 
    currency = 'VND', 
    label 
  }) => {
    if (typeof window === 'undefined') return;

    // 1. Meta Pixel Tracking
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, {
        ...(value !== undefined && { value, currency }),
        ...(label && { content_name: label }),
      });
    }

    // 2. GTM dataLayer Tracking
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: gtmEvent,
        ...(value !== undefined && { value, currency }),
        ...(label && { plan: label }),
      });
    }
  }, []);

  return { track };
}
