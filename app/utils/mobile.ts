export function isMobile() {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return false;
    
    // Check if navigator exists
    if (!window.navigator) return false;

    // Use a combination of screen width and user agent checks
    const userAgent = window.navigator.userAgent?.toLowerCase() || '';
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    
    return mobileRegex.test(userAgent) || (window.innerWidth || 0) < 1200;
  } catch (e) {
    console.error('Error in isMobile check:', e);
    return false;
  }
}

export function isIOS() {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !window.navigator) return false;
    const userAgent = window.navigator.userAgent || '';
    return /iPhone|iPad|iPod/i.test(userAgent);
  } catch (e) {
    console.error('Error in isIOS check:', e);
    return false;
  }
}

export function showMobileMessage() {
  try {
    if (typeof document === 'undefined') return;
    if (isIOS()) {
      const mobileMessage = document.createElement('div');
      mobileMessage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.95);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      `;
      mobileMessage.innerHTML = '<h1 style="margin: 0; padding: 20px;">Please use the desktop version</h1>';
      document.body?.appendChild(mobileMessage);
    }
  } catch (e) {
    console.error('Error showing mobile message:', e);
  }
}

