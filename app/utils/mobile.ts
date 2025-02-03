export function isMobile() {
  // we use sm: as the breakpoint for mobile. It's currently set to 640px
  return globalThis.innerWidth < 640;
}

export function isIOS() {
  return /iPhone/i.test(navigator.userAgent);
}

export function showMobileMessage() {
  if (isIOS()) {
    document.body.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;">
        <h1>Please use the desktop version</h1>
      </div>
    `;
  }
}

