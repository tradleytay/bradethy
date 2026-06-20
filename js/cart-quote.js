/*
  Bradethy - Cart quote renderer
  Uses current localStorage cart to render the quote table.
*/
(function (window, document) {
  'use strict';

  const storage = window.BradethyQuoteStorage;
  if (!storage) return;

  function qs(sel) {
    return document.querySelector(sel);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;');
  }

  function render() {
    const tbody = qs('#quoteTbody');
    const totalEl = qs('#quoteTotalText');
    const titleEl = qs('#quoteTitle');
    const rfqNumberEl = qs('#quoteRFQNumber');
    const createdAtEl = qs('#quoteCreatedAt');


    if (!tbody) return;

    const cart = storage.getCart();

    tbody.innerHTML = '';
    cart.forEach((item) => {
      const tr = document.createElement('tr');
      const lineTotal = item.price * (item.qty || 1);
      tr.innerHTML = `
        <td>${escapeHtml(item.name)}</td>
        <td>${escapeHtml(String(item.qty || 1))}</td>
      `;
      tbody.appendChild(tr);
    });

    // Total (shown on RFQ)
    if (totalEl) totalEl.textContent = storage.formatCurrency(storage.cartTotal(cart));

    if (titleEl) titleEl.textContent = 'Request for Quotation (RFQ)';


    const meta = qs('#quoteMeta');
    if (meta) {
      const now = new Date();
      meta.textContent = `Generated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }

    // Load RFQ metadata stored at checkout
    try {
      const rfqRaw = localStorage.getItem('bradethyQuoteMeta');
      const rfqData = rfqRaw ? JSON.parse(rfqRaw) : null;

      if (rfqNumberEl && rfqData?.rfqNumber) rfqNumberEl.textContent = String(rfqData.rfqNumber);
      if (createdAtEl && rfqData?.createdAt) createdAtEl.textContent = new Date(rfqData.createdAt).toLocaleString();
    } catch {
      // ignore
    }
  }


  document.addEventListener('DOMContentLoaded', () => {
    render();

    const downloadBtn = qs('#downloadPdfBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => window.print());
    }

    const y = qs('#currentYear');
    if (y) y.textContent = String(new Date().getFullYear());
  });
})(window, document);

