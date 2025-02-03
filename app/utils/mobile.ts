export function isMobile() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return false;
  // we use sm: as the breakpoint for mobile. It's currently set to 640px
  return window.innerWidth < 640;
}

export function isIOS() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || !window.navigator) return false;
  return /iPhone/i.test(window.navigator.userAgent);
}

export function showMobileMessage() {
  if (typeof document === 'undefined') return;
  if (isIOS()) {
    const mobileMessage = document.createElement('div');
    mobileMessage.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: white; z-index: 9999; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;';
    mobileMessage.innerHTML = '<h1>Please use the desktop version</h1>';
    document.body.appendChild(mobileMessage);
  }
}

