/*
  Bradethy Legacy Compatibility Shim
  -----------------------------------
  This project now uses js/app.js as the primary client-side implementation.
  Some older pages or templates may still reference legacy globals/functions
  that historically lived in js/script.js.

  To avoid duplicated/conflicting logic, this file only:
  - Safely exposes legacy symbols (if code tries to call them)
  - Bridges to window.BradethyApp (cart/wishlist/search behavior)

  IMPORTANT:
  - Do not re-implement product rendering/cart logic here.
  - js/app.js is responsible for UI and persistence.
*/

(function () {
  'use strict';

  function safeCall(fn, fallback) {
    try {
      if (typeof fn === 'function') return fn();
    } catch (e) {
      // swallow
    }
    return fallback;
  }

  // Wait for BradethyApp to be ready.
  function whenAppReady(cb) {
    if (window.BradethyApp && typeof window.BradethyApp.init === 'function') {
      cb(window.BradethyApp);
      return;
    }
    const maxMs = 5000;
    const start = Date.now();
    const t = setInterval(() => {
      if (window.BradethyApp && typeof window.BradethyApp.init === 'function') {
        clearInterval(t);
        cb(window.BradethyApp);
        return;
      }
      if (Date.now() - start > maxMs) {
        clearInterval(t);
      }
    }, 50);
  }

  // --- Legacy no-op / bridge functions ---
  // Old code may call initProducts(), renderProducts(), loadFilters(), etc.
  // In the current codebase, js/app.js handles all those.

  window.initProducts = function initProducts() {
    // If someone calls this, ensure app init happened.
    whenAppReady((app) => safeCall(() => app.init(), undefined));
  };

  window.renderProducts = function renderProducts() {
    // js/app.js handles rendering.
    // Keep as no-op to prevent ReferenceError in older templates.
    return;
  };

  window.loadFilters = function loadFilters() {
    // js/app.js handles filter UI persistence.
    return;
  };

  window.filterProducts = function filterProducts() {
    // js/app.js attaches event listeners for filters.
    return;
  };

  window.toggleDarkMode = function toggleDarkMode() {
    // js/app.js owns dark mode toggle; just trigger click if present.
    const btn = document.getElementById('darkModeToggle');
    if (btn) btn.click();
  };

  window.loadCart = function loadCart() {
    // js/app.js loads cart automatically. No-op.
  };

  window.loadWishlist = function loadWishlist() {
    // js/app.js loads wishlist automatically. No-op.
  };

  window.saveCart = function saveCart() {
    // Persistence handled in js/app.js. No-op.
  };

  window.saveWishlist = function saveWishlist() {
    // Persistence handled in js/app.js. No-op.
  };

  // Legacy cart mutation hooks
  window.addToCart = function addToCart(productId) {
    whenAppReady((app) => {
      // app.addToCart(productId, qty)
      safeCall(() => app.addToCart(productId, 1), undefined);
    });
  };

  window.removeFromCart = function removeFromCart(productId) {
    whenAppReady((app) => {
      safeCall(() => app.removeFromCart(productId), undefined);
    });
  };

  window.updateCartQty = function updateCartQty(productId, qty) {
    whenAppReady((app) => {
      safeCall(() => app.updateCartQty(productId, qty), undefined);
    });
  };

  // Legacy wishlist toggle hook
  window.toggleWishlist = function toggleWishlist(productId) {
    whenAppReady((app) => {
      safeCall(() => app.toggleWishlist(productId), undefined);
    });
  };

  // Legacy checkout trigger (older versions used a prompt-based flow).
  // Current implementation uses the checkout form in HTML.
  window.generateCartSummary = function generateCartSummary() {
    // Deprecated in this codebase.
    return '';
  };

  window.showNotification = function showNotification(message) {
    // app.js does not expose showNotification as a public function.
    // Provide a minimal fallback toast.
    const msg = String(message ?? '').trim();
    if (!msg) return;

    const t = document.createElement('div');
    t.className = 'toast-notification';
    t.textContent = msg;
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');

    // ensure base styles exist (minimal)
    const styleId = 'legacy-toast-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent =
        '.toast-notification{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(100px);background:linear-gradient(135deg,var(--primary,#2563eb),var(--secondary,#7c3aed));color:#fff;padding:12px 18px;border-radius:999px;box-shadow:0 10px 30px rgba(0,0,0,.25);z-index:3000;opacity:0;transition:all .25s ease}.toast-notification.show{opacity:1;transform:translateX(-50%) translateY(0)}';
      document.head.appendChild(style);
    }

    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 300);
    }, 2000);
  };

  // Legacy modal helpers
  window.trapFocus = window.trapFocus || function trapFocus() {
    // no-op: js/app.js uses its own modal behavior.
  };

  window.registerSW = function registerSW() {
    // js/app.js already registers SW? (it doesn't). sw.js is still used by PWA.
    // Keep as no-op; service worker registration is optional.
  };

})();

