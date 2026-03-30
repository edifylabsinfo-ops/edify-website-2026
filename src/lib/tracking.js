import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga4';

/**
 * Khởi tạo Pixel và GA4
 * Được gọi một lần duy nhất ở file App.jsx
 */
export const initTracking = () => {
  const pixelId = import.meta.env.VITE_FB_PIXEL_ID;
  const gaId = import.meta.env.VITE_GA_ID;
  const tiktokId = import.meta.env.VITE_TIKTOK_PIXEL_ID;

  // Init TikTok Pixel
  if (tiktokId) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
    }(window, document, 'ttq');
    window.ttq.load(tiktokId);
    console.log('[Tracking] TikTok Pixel initialized');
  } else {
    console.warn('[Tracking] VITE_TIKTOK_PIXEL_ID is missing');
  }

  // Init Facebook Pixel
  if (pixelId) {
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init(pixelId, undefined, options);
    console.log('[Tracking] Facebook Pixel initialized');
  } else {
    console.warn('[Tracking] VITE_FB_PIXEL_ID is missing');
  }

  // Init GA4
  if (gaId) {
    ReactGA.initialize(gaId);
    console.log('[Tracking] GA4 initialized');
  } else {
    console.warn('[Tracking] VITE_GA_ID is missing');
  }
};

/**
 * Theo dõi PageView (mỗi khi đổi URL)
 */
export const trackPageView = (path) => {
  // Track Meta Pixel
  if (import.meta.env.VITE_FB_PIXEL_ID) {
    ReactPixel.pageView();
  }

  // Track Google Analytics 4
  if (import.meta.env.VITE_GA_ID) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }

  // Track TikTok
  if (window.ttq) {
    window.ttq.page();
  }
};

/**
 * Theo dõi sự kiện Lead (khi khách điền form thành công)
 */
export const trackLead = (leadData = {}) => {
  if (import.meta.env.VITE_FB_PIXEL_ID) {
    ReactPixel.track('Lead', leadData);
  }

  if (import.meta.env.VITE_GA_ID) {
    ReactGA.event({
      category: 'Conversion',
      action: 'generate_lead',
      label: 'Workshop Registration',
      value: leadData.value || 0
    });
  }

  if (window.ttq) {
    window.ttq.track('SubmitForm', {
      value: leadData.value || 0,
      currency: 'USD'
    });
  }
};
