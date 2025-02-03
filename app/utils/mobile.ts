export function isMobile() {
  // we use sm: as the breakpoint for mobile. It's currently set to 640px
  return globalThis.innerWidth < 1200;
}
<style>
  .mobile-warning {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    text-align: center;
    z-index: 9999;
    padding: 20px;
  }

  /* Show warning on screens smaller than 768px (typical tablet/mobile breakpoint) */
  @media screen and (max-width: 768px) {
    .mobile-warning {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Hide your main content */
    body > *:not(.mobile-warning) {
      display: none;
    }
  }
</style>

<div class="mobile-warning">
  <h1>Please only use Desktop version</h1>
</div>
