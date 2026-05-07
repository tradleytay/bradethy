// Cart quote PDF using browser print-to-PDF

(function(){
  const pad2 = (n)=>String(n).padStart(2,'0');

  function buildDateStr(d){
    const yyyy = d.getFullYear();
    const mm = pad2(d.getMonth()+1);
    const dd = pad2(d.getDate());
    return `${yyyy}-${mm}-${dd}`;
  }

  function getCart(){
    try{
      const raw = localStorage.getItem('hotelEssentialsCart');

      const parsed = JSON.parse(raw || '[]');
      return Array.isArray(parsed) ? parsed : [];
    }catch(e){
      return [];
    }
  }

  function init(){
    const tbody = document.getElementById('quoteTbody');
    const totalEl = document.getElementById('quoteTotalText');
    const titleEl = document.getElementById('quoteTitle');
    const metaEl = document.getElementById('quoteMeta');
    const btn = document.getElementById('downloadPdfBtn');

    if(!tbody || !totalEl) return;

    const dateStr = buildDateStr(new Date());
    const title = `quote of ${dateStr}`;

    document.title = title;
    if(titleEl) titleEl.textContent = title;
    if(metaEl) metaEl.innerHTML = `Date: <b>${dateStr}</b><br/>Type: <b>Cart quotation</b>`;

    const cart = getCart();
    if(cart.length === 0){
      tbody.innerHTML = `<tr><td colspan="4" style="color:var(--gray)">Your cart is empty.</td></tr>`;
      totalEl.textContent = '$0.00';
      return;
    }

    let total = 0;
    tbody.innerHTML = cart.map(item => {
      const qty = Number(item.quantity) || 0;
      const unit = Number(item.price) || 0;
      const lineTotal = unit * qty;
      total += lineTotal;
      return `
        <tr>
          <td>${item.name || ''}</td>
          <td>${qty}</td>
          <td>$${unit.toFixed(2)}</td>
          <td>$${lineTotal.toFixed(2)}</td>
        </tr>
      `;
    }).join('');

    totalEl.textContent = `$${total.toFixed(2)}`;

    if(btn){
      btn.addEventListener('click', ()=> window.print());
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

