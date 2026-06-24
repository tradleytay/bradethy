/*
  Bradethy - Catalogue quote renderer
  Uses current localStorage cart to render the quote table.
*/
(function (window, document) {
  'use strict';

  const storage = window.BradethyQuoteStorage;
  if (!storage) {
    // Fail silently; page should still render without JS errors.
    return;
  }

  function qs(sel) {
    return document.querySelector(sel);
  }

  function render() {
    const tbody = qs('#quoteTbody');
    const totalEl = qs('#quoteTotalText');
    const titleEl = qs('#quoteTitle');

    if (!tbody) return;

    const cart = storage.getCart();

    tbody.innerHTML = '';
    cart.forEach((item) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(item.name)}</td>
        <td>${escapeHtml(String(item.qty || 1))}</td>
      `;
      tbody.appendChild(tr);
    });

    if (totalEl) totalEl.textContent = 'Request';
    if (titleEl) titleEl.textContent = 'Catalogue Quote';

    const meta = qs('#quoteMeta');
    if (meta) {
      const now = new Date();
      meta.textContent = `Generated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;');
  }

  // Wire up download button (simple print fallback)
  document.addEventListener('DOMContentLoaded', () => {
    render();

    const downloadBtn = qs('#downloadPdfBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        // For static sites without backend/pdf generation: use native print.
        // Users can “Save as PDF” in the print dialog.
        window.print();
      });
    }

    // Set consistent year in case the HTML depends on it
    const y = qs('#currentYear');
    if (y) y.textContent = String(new Date().getFullYear());
  });
})(window, document);

