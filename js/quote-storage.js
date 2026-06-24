/*
  Bradethy - Quote storage helpers
  Static site only: uses localStorage to generate printable quote PDFs/pages.
*/
(function (window) {
  'use strict';

  const KEYS = {
    cart: 'bradethyCart',
  };

  function safeParse(raw, fallback) {
    try {
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function getCart() {
    const raw = localStorage.getItem(KEYS.cart);
    const cart = safeParse(raw, []);

    if (!Array.isArray(cart)) return [];
    return cart
      .map((i) => ({
        id: Number(i.id),
        name: String(i.name ?? ''),
        price: Number(i.price ?? 0),
        qty: Math.max(0, Number(i.qty ?? 1)),
      }))
      .filter((i) => i.id && i.name);
  }

  function cartTotal(cart) {
    return (cart || []).reduce((sum, i) => sum + i.price * (i.qty || 1), 0);
  }

  window.BradethyQuoteStorage = {
    KEYS,
    getCart,
    cartTotal,
    // Currency intentionally removed (prices vary; do not display)
    formatCurrency(v) {
      return String(v ?? '');
    },
  };
})(window);

