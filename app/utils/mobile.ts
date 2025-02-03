export function isMobile() {
  // we use sm: as the breakpoint for mobile. It's currently set to 640px
  return globalThis.innerWidth < 640;
}

export function showMobileMessage() {
  if (isMobile()) {
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      z-index: 9999;
      font-size: 18px;
    `;
    message.innerHTML = 'Please only use Desktop version';
    document.body.appendChild(message);
  }
}
