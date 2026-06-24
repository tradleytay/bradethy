
/*
  BradethyApp - consolidated client-side app for the static site.
  Keeps the website static (no backend), uses localStorage only.
*/
(function (window, document) {
  'use strict';

  const STORAGE_KEYS = {
    cart: 'bradethyCart',
    wishlist: 'bradethyWishlist',
    dark: 'bradethyDarkMode',
    cookieConsent: 'bradethyCookieConsent',
    quoteRequest: 'bradethyQuoteRequest',
    quoteMeta: 'bradethyQuoteMeta',
  };


  // Minimal products dataset fallback.
  // If you later add a full product list, set window.__BRADETHY_PRODUCTS__ before app init.
  // IMPORTANT: these image paths map to files inside /images.
  const PRODUCTS = window.__BRADETHY_PRODUCTS__ || [
    { id: 1, image: 'images/soap.jpeg', name: 'Guest Soap (10ml)', price: 0.50, category: 'amenities', description: 'Individually wrapped 10ml guest soap for hotels and guest rooms.' },
    { id: 2, image: 'images/coffee.jpeg', name: 'Instant Coffee Sachet', price: 0.15, category: 'beverages', description: 'Single-serve instant coffee sachet — convenient for in-room service.' },
    { id: 3, image: 'images/shampoo.jpeg', name: 'Shampoo (travel)', price: 1.00, category: 'amenities', description: 'Travel-size shampoo with a gentle cleansing formula.' },
    { id: 4, image: 'images/sauce.jpeg', name: 'Tomato Sauce Sachet', price: 0.05, category: 'condiments', description: 'Single-portion tomato sauce sachet for takeaway or dining.' },
    { id: 5, image: 'images/vinegar.jpeg', name: 'Vinegar Sachet', price: 0.05, category: 'condiments', description: 'Individual vinegar sachet — ideal for salads and meals.' },
    { id: 6, image: 'images/sugar.jpeg', name: 'Sugar Sachet', price: 0.03, category: 'condiments', description: 'Pre-measured sugar sachet for coffee, tea and catering.' },
    { id: 7, image: 'images/salt.jpeg', name: 'Salt Sachet', price: 0.03, category: 'condiments', description: 'Single-use salt sachet for table service and takeaways.' },
    { id: 8, image: 'images/forks.jpeg', name: 'Plastic Forks (disposable)', price: 0.05, category: 'cutlery', description: 'Lightweight disposable forks for catering and takeaways.' },
    { id: 9, image: 'images/spoons.jpeg', name: 'Plastic Spoons (disposable)', price: 0.05, category: 'cutlery', description: 'Durable disposable spoons for desserts and beverages.' },
    { id: 10, image: 'images/knives.jpeg', name: 'Plastic Knives (disposable)', price: 0.05, category: 'cutlery', description: 'Disposable plastic knives for simple food service.' },
    { id: 11, image: 'images/serviettes.jpeg', name: 'Serviettes / Napkins', price: 0.25, category: 'cutlery', description: 'Soft paper serviettes for restaurants and events.' },
    { id: 12, image: 'images/toiletrolls.jpeg', name: 'Toilet Rolls', price: 1.50, category: 'amenities', description: 'Standard toilet paper rolls for hotel and commercial bathrooms.' },
    { id: 13, image: 'images/papertowel.jpeg', name: 'Paper Towels (roll)', price: 2.50, category: 'cleaning', description: 'High-absorbency paper towels for cleaning and spill control.' },
    { id: 14, image: 'images/sanitizer.jpeg', name: 'Hand Sanitizer (50ml)', price: 1.50, category: 'cleaning', description: 'Compact hand sanitizer bottle for hygiene and guest safety.' },
  /* { id: 15, image: 'images/back.png', name: 'Guest Lotion (travel)', price: 1.00, category: 'amenities', description: 'Travel-size moisturizing lotion for guest toiletry kits.' }, */
    { id: 16, image: 'images/cremora.jpeg', name: 'Cremora Creamer Sachet', price: 0.04, category: 'condiments', description: 'Single-serve coffee creamer sachet for beverages.' },
    { id: 17, image: 'images/hardbroom.jpeg', name: 'Hard Broom', price: 6.00, category: 'cleaning', description: 'Sturdy hard-bristle broom for outdoor and heavy-duty sweeping.' },
    { id: 18, image: 'images/softbroom.jpeg', name: 'Soft Broom', price: 5.50, category: 'cleaning', description: 'Soft-bristle broom ideal for indoor floors and dust control.' },
    { id: 19, image: 'images/binliner.jpeg', name: 'Bin Liners (roll)', price: 3.50, category: 'cleaning', description: 'Heavy-duty bin liners to protect waste bins and contain refuse.' },
    //{ id: 20, image: 'images/toothpicks.jpeg', name: 'Kebab / Skewer Sticks', price: 1.20, category: 'cutlery', description: 'Wooden skewer sticks for grilling and food presentation.' },
    { id: 21, image: 'images/toothpicks.jpeg', name: 'Toothpicks', price: 0.50, category: 'cutlery', description: 'Pack of wooden toothpicks for table service and food handling.' },
    { id: 22, image: 'images/dishwash.jpeg', name: 'Dishwashing Liquid (500ml)', price: 2.50, category: 'cleaning', description: 'Concentrated dishwashing liquid for manual washing.' },
  //{ id: 23, image: 'images/kraft.jpeg', name: 'Paper Bags (small)', price: 0.30, category: 'packaging', description: 'Small paper bags suitable for takeaways and retail packaging.' },
    //{ id: 24, image: 'images/sanitizer.jpeg', name: 'All-purpose Cleaner (1L)', price: 5.50, category: 'cleaning', description: '1L all-purpose cleaner for general surface cleaning.' },
    { id: 25, image: 'images/8ozcup.jpeg', name: 'Paper Coffee Cup (8oz)', price: 0.08, category: 'beverages', description: 'Single-use 8oz paper cup for espresso and small hot drinks.' },
    { id: 26, image: 'images/12ozcup.jpeg', name: 'Paper Coffee Cup (12oz)', price: 0.10, category: 'beverages', description: 'Single-use 12oz paper cup for hot beverages and takeaway.' },
    { id: 27, image: 'images/cuplids.jpeg', name: 'Coffee Cup Lids', price: 0.02, category: 'beverages', description: 'Snap-fit lids compatible with common takeaway cups.' },
    { id: 28, image: 'images/sleeves.jpeg', name: 'Cup Sleeves', price: 0.03, category: 'beverages', description: 'Cardboard sleeves to protect hands from hot cups.' },
    { id: 29, image: 'images/kraft.jpeg', name: 'Kraft Paper Bags (medium)', price: 0.20, category: 'packaging', description: 'Sturdy brown kraft takeaway bags — recyclable.' },
    { id: 30, image: 'images/clamshell.jpeg', name: 'Clamshell Takeaway Container (PLA)', price: 0.60, category: 'packaging', description: 'Compostable PLA clamshell suitable for hot or cold food.' },
    { id: 31, image: 'images/foodbox.jpeg', name: 'Disposable Food Box (paper)', price: 0.45, category: 'packaging', description: 'Grease-resistant paper food box for deliveries and takeaways.' },
    { id: 32, image: 'images/aluminiumtray.jpeg', name: 'Aluminium Foil Tray', price: 0.90, category: 'packaging', description: 'Foil tray for baking and transporting hot dishes.' },
    { id: 33, image: 'images/bio-cutlery.jpeg', name: 'Biodegradable Cutlery Set', price: 0.12, category: 'cutlery', description: 'Fork, knife and spoon set made from plant fibre — compostable.' },
    { id: 34, image: 'images/straws.jpeg', name: 'Paper Straws', price: 0.02, category: 'beverages', description: 'Compostable paper straws for cold drinks.' },
    { id: 35, image: 'images/stirrers.jpeg', name: 'Coffee Stirrers', price: 0.01, category: 'beverages', description: 'Wooden or plastic stirrers for hot drinks and instant mixes.' },
  //{ id: 36, image: 'images/serviettes.jpeg', name: 'Napkin Pack (50)', price: 1.50, category: 'cutlery', description: 'Pack of 50 paper napkins — soft and absorbent.' },
    { id: 37, image: 'images/insulatedbag.jpeg', name: 'Insulated Delivery Bag (large)', price: 18.00, category: 'packaging', description: 'Thermal bag to keep deliveries hot or cold during transport.' },
    { id: 38, image: 'images/clamshell.jpeg', name: 'Foam Takeaway Container', price: 0.25, category: 'packaging', description: 'Lightweight foam container for hot meals (economy option).' },
  /* { id: 39, image: 'images/back.png', name: 'Disposable Food-Grade Gloves (box)', price: 6.00, category: 'cleaning', description: 'Box of powder-free disposable gloves for food handling.' }, */
  //{ id: 40, image: 'images/soap.jpeg', name: 'Liquid Hand Soap Refill (1L)', price: 4.50, category: 'cleaning', description: '1L refill bottle for hand-wash dispensers.' },
  { id: 41, image: 'images/12ozcup.jpeg', name: 'Insulated Paper Cup (12oz)', price: 0.18, category: 'beverages', description: 'Double-walled insulated 12oz cup for hot drinks.' },
  { id: 42, image: 'images/cuplids.jpeg', name: 'Compostable Cup Lids', price: 0.03, category: 'beverages', description: 'PLA compostable lids for takeaway cups.' },
  { id: 43, image: 'images/bio-cutlery.jpeg', name: 'Wooden Forks (pack)', price: 0.80, category: 'cutlery', description: 'Pack of wooden forks — renewable and compostable.' },
  //{ id: 44, image: 'images/spoons.jpeg', name: 'Wooden Spoons (pack)', price: 0.80, category: 'cutlery', description: 'Pack of wooden spoons for desserts and hot drinks.' },
  //{ id: 45, image: 'images/sauce.jpeg', name: 'Condiment Variety Pack (50)', price: 4.00, category: 'condiments', description: 'Assorted sachet pack: sugar, salt, pepper, ketchup (50 pcs).' },
  //{ id: 46, image: 'images/salt.jpeg', name: 'Pepper / Salt Sachet', price: 0.02, category: 'condiments', description: 'Single-portion pepper or salt sachet for table service.' },
  /* { id: 47, image: 'images/back.png', name: 'Food Labels / Stickers (roll)', price: 0.50, category: 'packaging', description: 'Adhesive labels for order names, ingredients and allergens.' },
  { id: 48, image: 'images/back.png', name: 'Heat Seal Film (roll)', price: 6.50, category: 'packaging', description: 'Heat-seal film for securing takeaway containers.' }, */
  //{ id: 49, image: 'images/sauce.jpeg', name: 'Sauce Cups with Lid (30ml)', price: 0.05, category: 'packaging', description: 'Small sauce/dip cups with snap-fitting lids.' },
  { id: 50, image: 'images/toothpicks.jpeg', name: 'Bamboo Skewers (100)', price: 1.20, category: 'cutlery', description: 'Pack of 100 bamboo skewers for grilling and presentation.' },
  { id: 51, image: 'images/insulatedbag.jpeg', name: 'Beverage Cooler Bag (small)', price: 9.00, category: 'equipment', description: 'Small insulated cooler bag for cold drink deliveries.' },
  { id: 52, image: 'images/aluminiumtray.jpeg', name: 'Aluminium Foil Wrap (roll)', price: 2.80, category: 'packaging', description: 'Standard aluminium foil roll for wrapping and heat retention.' },
  { id: 53, image: 'images/papertowel.jpeg', name: 'Baking / Parchment Paper (roll)', price: 3.00, category: 'packaging', description: 'Greaseproof parchment paper roll for food prep.' },
  /* { id: 54, image: 'images/back.png', name: 'Cling Film (roll)', price: 2.00, category: 'packaging', description: 'Food-safe cling film for sealing and storage.' }, */
  { id: 55, image: 'images/sanitizer.jpeg', name: 'Surface Sanitizing Wipes (pack)', price: 2.50, category: 'cleaning', description: 'Pre-moistened wipes for quick surface disinfection.' },
  /* { id: 56, image: 'images/back.png', name: 'Aerosol Air Freshener', price: 3.00, category: 'amenities', description: 'Neutral-scent air freshener spray for rooms and bathrooms.' }, */
  { id: 57, image: 'images/papertowel.jpeg', name: 'Centre-Pull Hand Towel Roll', price: 5.50, category: 'cleaning', description: 'Commercial centre-pull hand towel roll for dispensers.' },
  /* { id: 58, image: 'images/back.png', name: 'Thermal Label Printer', price: 85.00, category: 'equipment', description: 'Compact thermal printer for order labels and receipts.' },
  { id: 59, image: 'images/back.png', name: 'Allergen / Ingredient Cards (pack)', price: 6.00, category: 'packaging', description: 'Pre-printed allergen/ingredient cards for takeaways.' },
  { id: 60, image: 'images/back.png', name: 'Portion Control Dispenser', price: 12.00, category: 'equipment', description: 'Manual dispenser for measured sauce or condiment portions.' }, */
    //{ id: 61, image: 'images/paper-bags-large.jpeg', name: 'Paper Bags (large)', price: 0.50, category: 'packaging', description: 'Large paper bags for meals and multiple items — recyclable.' },
  ];

  let cart = [];
  let wishlist = [];

  // Keep product list stable across pages where window.__BRADETHY_PRODUCTS__ is not provided.
  // This avoids ReferenceError when renderers attempt to map cart items.



  // ---------- Utilities ----------
  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function qsa(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  // Currency intentionally removed (prices vary; site should not display them).
  function formatCurrency(v) {
    return String(v ?? '');
  }

  function safeParse(raw, fallback) {
    try {
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      const raw = JSON.stringify(value);
      localStorage.setItem(key, raw);
      // Backwards-compatibility: some older code stored the cart under a key with a leading space
      // e.g. 'bradethyCart'. When we save the cart, mirror it to the legacy key so both readers see it.
      try {
        if (key === STORAGE_KEYS.cart) {
          localStorage.setItem(' ' + key, raw);
        }
      } catch (e) {
        // ignore secondary write errors
      }
    } catch {
      // ignore
    }
  }

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      const parsed = safeParse(raw, null);
      if (parsed !== null) return parsed;

      // Backwards-compatibility: try legacy key with leading space for cart data
      if (key === STORAGE_KEYS.cart) {
        try {
          const legacy = localStorage.getItem(' ' + key);
          const parsedLegacy = safeParse(legacy, null);
          if (parsedLegacy !== null) return parsedLegacy;
        } catch (e) {
          // ignore
        }
      }

      return fallback;
    } catch {
      return fallback;
    }
  }

  function normalizeCart(rawCart) {
    const arr = Array.isArray(rawCart) ? rawCart : [];
    return arr
      .map((i) => ({
        id: Number(i.id),
        name: String(i.name ?? ''),
        price: Number(i.price ?? 0),
        qty: Math.max(0, Number(i.qty ?? 1)),
      }))
      .filter((i) => i.id && i.name && i.qty >= 0);
  }

  // ---------- Data helpers ----------
  function findProduct(productId) {
    return PRODUCTS.find((p) => String(p.id) === String(productId));
  }

  function cartTotal() {
    return cart.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);
  }

  function wishlistHas(productId) {
    const id = Number(productId);
    return wishlist.some((x) => x.id === id);
  }

  // ---------- Cart API ----------
  function addToCart(productId, qty = 1) {
    const prod = findProduct(productId);
    if (!prod) return false;

    const id = Number(productId);
    const q = Math.max(1, Number(qty || 1));

    const existing = cart.find((i) => i.id === id);
    if (existing) existing.qty = Math.min(999, (existing.qty || 1) + q);
    else cart.push({ id, name: prod.name, price: prod.price, qty: q });

    save(STORAGE_KEYS.cart, cart);
    renderCartCount();
    renderCartModal();
    showToast(`${prod.name} added to cart`);
    // Persisted data may still contain price internally, but UI intentionally never displays prices.
    return true;
  }

  function removeFromCart(productId) {
    const id = Number(productId);
    cart = cart.filter((i) => i.id !== id);
    save(STORAGE_KEYS.cart, cart);
    renderCartCount();
    renderCartModal();
  }

  function updateCartQty(productId, qty) {
    const id = Number(productId);
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    const nextQty = Math.max(0, Number(qty));
    if (nextQty === 0) return removeFromCart(id);

    item.qty = Math.min(999, nextQty);
    save(STORAGE_KEYS.cart, cart);
    renderCartCount();
    renderCartModal();
  }

  // ---------- Wishlist API ----------
    // Update heart icons in the product grid (so user sees changes instantly)
    // without requiring a refresh or a re-render. A dedicated helper is provided
    // so other parts of the app (toggleWishlist, init) can keep buttons in sync.
    function syncWishlistButtonsOnPage() {
      qsa('.wishlist-btn').forEach((btn) => {
        const pid = Number(btn.dataset.id);
        const inWish = wishlistHas(pid);
        btn.classList.toggle('active', inWish);
        const heart = btn.querySelector('i.fas.fa-heart');
        if (heart) {
          // keep icon markup as-is; just ensure active state via class
        }
        btn.setAttribute('aria-pressed', inWish ? 'true' : 'false');
      });
    }

  function toggleWishlist(productId) {
    const id = Number(productId);

    if (wishlistHas(id)) {
      wishlist = wishlist.filter((x) => x.id !== id);
      save(STORAGE_KEYS.wishlist, wishlist);
      renderWishlistCount();
      renderWishlistModal();
      syncWishlistButtonsOnPage();
      showToast('Removed from wishlist');
      return false;
    }

    const prod = findProduct(id);
    if (!prod) return false;

    wishlist.push({ id, name: prod.name, price: prod.price });
    save(STORAGE_KEYS.wishlist, wishlist);
    renderWishlistCount();
    renderWishlistModal();
    syncWishlistButtonsOnPage();
    showToast('Added to wishlist');
    return true;
  }

  // ---------- Toast ----------
  function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast-notification';
    t.textContent = msg;
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');

    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));

    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 300);
    }, 2000);
  }

  // ---------- Modals ----------
  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;');
  }

  function buildWhatsAppMessageFromCartAndForm(formData) {
    const name = String(formData.fullname || '').trim();
    const company = String(formData.company || '').trim();
    const address = String(formData.address || '').trim();
    const promoCode = String(formData.promocode || '').trim();
    const deliveryNote = String(formData.deliveryNote || '').trim();
    const phone = String(formData.phone || '').trim();

    const lines = [];
    lines.push('Hi Bradethy Team,');
    lines.push('');
    lines.push('New Cart Request:');
    lines.push('');

    lines.push(`Customer: ${name || '-'}`);
    lines.push(`Company: ${company || '-'}`);
    lines.push(`Address: ${address || '-'}`);
    lines.push(`Phone: ${phone || '-'}`);
    lines.push(`Promo code: ${promoCode || '-'}`);
    lines.push(`Delivery note: ${deliveryNote || '-'}`);

    lines.push('');
    lines.push('Cart items:');
    cart.forEach((i) => {
      const qty = i.qty || 1;
      lines.push(`- ${i.name} (x${qty})`);
    });

    lines.push('');
    lines.push('Cart total: (hidden)');
    return lines.join('\n');
  }

  function openCheckoutModal() {
    // No-op: checkout form lives in HTML. This exists for future extensibility.
  }

  function setupCheckoutHandler() {
    const checkoutBtn = qs('#checkoutBtn');
    if (!checkoutBtn) return;

    checkoutBtn.addEventListener('click', () => {
      const modal = qs('#cartModal');
      if (!modal) return;

      const form = qs('#checkoutForm');
      if (!form) {
        // If form is not present yet, do nothing.
        return;
      }

      if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
        form.reportValidity?.();
        return;
      }

      const fd = new FormData(form);
      const data = {
        fullname: String(fd.get('fullname') || '').trim(),
        company: String(fd.get('company') || '').trim(),
        address: String(fd.get('address') || '').trim(),
        promocode: String(fd.get('promocode') || '').trim(),
        phone: String(fd.get('phone') || '').trim(),
        deliveryNote: String(fd.get('deliveryNote') || '').trim(),
      };

      // Generate an RFQ number + persist customer data so `cart-quote.html` can render a professional RFQ document.
      const rfqNumber = `RFQ-${Date.now()}`;
      try {
        save(STORAGE_KEYS.quoteMeta, {
          rfqNumber,
          createdAt: new Date().toISOString(),
        });
        save(STORAGE_KEYS.quoteRequest, data);
      } catch {
        // ignore persistence errors
      }


      const DEFAULT_TO = '263772814702';
      const toOverride = String(fd.get('to') || '').trim();
      const toNumber = toOverride || DEFAULT_TO;

      const text = buildWhatsAppMessageFromCartAndForm(data);
      const waUrl = `https://wa.me/${encodeURIComponent(toNumber)}?text=${encodeURIComponent(text)}`;

      window.open(waUrl, '_blank', 'noopener');
    });
  }

  function renderCartCount() {
    const el = qs('#floatingCartCount') || qs('.cart-count');
    if (!el) return;
    el.textContent = String(cart.reduce((s, i) => s + (i.qty || 0), 0));

  }

  function renderWishlistCount() {
    const el = qs('#floatingWishlistCount') || qs('.wishlist-count');
    if (!el) return;
    el.textContent = String(wishlist.length || 0);
  }

  // ---- Cart modal manager (clear, accessible, and self-contained) ----
  function renderCartModal() {
  const modal = qs('#cartModal');
  const itemsEl = qs('#cartItems');
  const subtotalEl = qs('#cartSubtotal');
  const deliveryEl = qs('#cartDelivery');
  const totalEl = qs('#cartTotal');
  const checkoutForm = qs('#checkoutForm');
  // Be tolerant: only require modal and items container. Some pages include only a subset of totals.
  if (!modal || !itemsEl) return;

    // Load fresh cart state and update floating count
    cart = normalizeCart(load(STORAGE_KEYS.cart, []));
    renderCartCount();

    // Clear previous content
    itemsEl.innerHTML = '';

    if (!cart.length) {
      itemsEl.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
      // Prices are intentionally hidden — show request placeholders
      if (subtotalEl) subtotalEl.textContent = 'Request';
      if (deliveryEl) deliveryEl.textContent = 'Request';
      if (totalEl) totalEl.textContent = 'Request';
      // disable checkout if present
      if (checkoutForm) qs('#checkoutBtn')?.setAttribute('disabled', 'disabled');
      return;
    }

    // For each item render a compact row with name, quantity input and remove button (no prices)
    cart.forEach((it) => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.dataset.id = String(it.id);

      row.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(it.name)}</div>
        </div>
        <div class="cart-item-actions">
          <input class="qty-input" data-id="${it.id}" type="number" min="1" step="1" value="${it.qty}" aria-label="Quantity for ${escapeHtml(
        it.name
      )}" />
          <button class="remove-item" data-id="${it.id}" type="button" aria-label="Remove ${escapeHtml(it.name)}">Remove</button>
        </div>`;

      itemsEl.appendChild(row);
    });

    // Totals are hidden from the UI — keep placeholders for pages that expect them
    if (subtotalEl) subtotalEl.textContent = 'Request';
    if (deliveryEl) deliveryEl.textContent = 'Request';
    if (totalEl) totalEl.textContent = 'Request';

    // Wire quantity inputs (live update) and remove buttons
    itemsEl.querySelectorAll('.qty-input').forEach((input) => {
      const id = Number(input.dataset.id);
      const update = () => {
        let val = Math.floor(Number(input.value || 0) || 0);
        if (val <= 0) return removeFromCart(id);
        updateCartQty(id, val);
      };
      input.addEventListener('change', update);
      // no per-item subtotal updates (prices hidden)
    });

    itemsEl.querySelectorAll('.remove-item').forEach((btn) => {
      btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.id)));
    });

    // Clear cart button: replace node to avoid duplicate handlers
    const clearBtn = qs('#clearCartBtn');
    if (clearBtn) {
      const clone = clearBtn.cloneNode(true);
      clearBtn.parentNode.replaceChild(clone, clearBtn);
      clone.addEventListener('click', () => {
        cart = [];
        save(STORAGE_KEYS.cart, cart);
        renderCartCount();
        renderCartModal();
        // keep modal open but show empty state
      });
    }

    // enable checkout if present
    if (checkoutForm) qs('#checkoutBtn')?.removeAttribute('disabled');
  }

  function openCartModal() {
    const modal = qs('#cartModal');
    if (!modal) return;
    openModal(modal, renderCartModal);
  }

  function closeCartModal() {
    const modal = qs('#cartModal');
    if (!modal) return;
    closeModal(modal);
  }

  function renderWishlistModal() {
    const modal = qs('#wishlistModal');
    const itemsEl = qs('#wishlistItems');
    if (!modal || !itemsEl) return;

    itemsEl.innerHTML = '';

    if (!wishlist.length) {
      itemsEl.innerHTML = '<div class="empty-wishlist">Your wishlist is empty</div>';
      return;
    }

    wishlist.forEach((i) => {
      const item = document.createElement('div');
      item.className = 'wishlist-item';
      item.innerHTML = `
        <div class="wishlist-item-info">
          <h4>${escapeHtml(i.name)}</h4>
        </div>
        <div>
          <button class="btn-add-to-cart" data-id="${i.id}" type="button">Add to Cart</button>
          <button class="remove-wishlist" data-id="${i.id}" type="button">Remove</button>
        </div>`;
      itemsEl.appendChild(item);
    });

    qsa('.btn-add-to-cart').forEach((b) =>
      b.addEventListener('click', (e) => {
        const id = Number(e.currentTarget.dataset.id);
        addToCart(id, 1);
      })
    );

    qsa('.remove-wishlist').forEach((b) =>
      b.addEventListener('click', (e) => {
        toggleWishlist(Number(e.currentTarget.dataset.id));
      })
    );
  }

  function openModal(modalEl, renderer) {
    if (!modalEl) return;
    // Save last focused element so we can restore focus on close
    window.__bradethyLastFocus__ = document.activeElement;
    // Make modal visible to assistive tech and visually
    modalEl.setAttribute('aria-hidden', 'false');
    modalEl.classList.add('active');
    if (renderer) renderer();
    // Move focus into the modal: prefer the first focusable control
    const focusable = modalEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    try {
      if (focusable && typeof focusable.focus === 'function') focusable.focus();
    } catch (e) {
      // ignore focus errors
    }
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    // If focus is inside modal, move it back to the last focused element or blur
    try {
      if (modalEl.contains(document.activeElement)) {
        const last = window.__bradethyLastFocus__;
        if (last && typeof last.focus === 'function') last.focus();
        else document.activeElement?.blur?.();
      }
    } catch (e) {
      // ignore
    }

    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    // clear saved focus
    window.__bradethyLastFocus__ = null;
  }

  // ---------- Products ----------
  function applyProductSearchFilterSort() {
    const grid = qs('#productGrid');
    if (!grid) return;

    const searchInput = qs('#productSearch');
    const categoryFilter = qs('#categoryFilter');
    const q = (searchInput?.value || '').trim().toLowerCase();
    const category = (categoryFilter?.value || '').trim();
    // Price sort removed intentionally (prices are not shown).
    const sort = (qs('#priceSort')?.value || '').trim();

    let list = PRODUCTS.slice();

    if (category) list = list.filter((p) => String(p.category) === String(category));

    if (q) {
      list = list.filter(
        (p) => String(p.name).toLowerCase().includes(q) || String(p.description || '').toLowerCase().includes(q)
      );
    }

    // Sorting by price removed. Keep name sorting if requested.
    if (sort === 'name') list.sort((a, b) => String(a.name).localeCompare(String(b.name)));

    const shouldLimitToFour = document.querySelector('#home') && grid.closest('#products');
    if (shouldLimitToFour) list = list.slice(0, 4);

    // Save last filtered list for pagination and reset shown count
    window.__bradethyFilteredProducts__ = list;
    window.__bradethyInitialShow = window.__bradethyInitialShow || 12; // initial visible count
    window.__bradethyLoadIncrement = window.__bradethyLoadIncrement || 12; // items to add on each load
    window.__bradethyProductsShownCount__ = Math.min(list.length, window.__bradethyInitialShow);
    renderProducts(grid, list, /*reset=*/true);
  }

  function getProductImageFor(p) {
    if (!p) return '';
    const img = p.image;
    if (typeof img === 'string' && img.trim()) return img.trim();
    return '';
  }

  function renderProducts(gridEl, list, reset = false) {
    // list: full filtered list
    // reset: whether to clear and render from zero (used after filtering/search)

    if (!Array.isArray(list) || !list.length) {
      gridEl.innerHTML = '<div class="empty-products">No products found</div>';
      qs('#loadMoreBtn')?.setAttribute('style', 'display:none;');
      return;
    }

    // initialization of counters
    window.__bradethyInitialShow = window.__bradethyInitialShow || 12;
    window.__bradethyLoadIncrement = window.__bradethyLoadIncrement || 12;
    window.__bradethyProductsShownCount__ = window.__bradethyProductsShownCount__ || Math.min(list.length, window.__bradethyInitialShow);

    const prevShown = reset ? 0 : (window.__bradethyProductsPreviouslyShownCount__ || 0);
    const shown = Math.min(list.length, window.__bradethyProductsShownCount__);

    // if reset, clear and render first `shown` items; otherwise append items from prevShown to shown
    if (reset) gridEl.innerHTML = '';

    for (let i = prevShown; i < shown; i++) {
      const p = list[i];
      if (!p) continue;
      const card = document.createElement('article');
      card.className = 'product-card';


      const imgSrc = getProductImageFor(p);
      const imageMarkup = imgSrc
        ? `<img src="${imgSrc}" alt="${escapeHtml(p.name)}" loading="lazy" />`
        : `${escapeHtml(p.name.charAt(0).toUpperCase())}`;

      // Price removed completely.
      const inWishlist = wishlistHas(p.id);

      card.innerHTML = `
        <div class="product-image" aria-hidden="true">${imageMarkup}</div>
        <div class="product-info">
          <h3>${escapeHtml(p.name)}</h3>
          <p class="desc">${escapeHtml(p.description || '')}</p>
          <div class="product-actions">
            <button class="btn add-to-cart" data-id="${p.id}" type="button">Add to cart</button>
            <button class="btn wishlist-btn${inWishlist ? ' active' : ''}" data-id="${p.id}" type="button" aria-label="Toggle wishlist" aria-pressed="${inWishlist ? 'true' : 'false'}">
              <i class="fas fa-heart${inWishlist ? '' : ''}" aria-hidden="true"></i>
            </button>
          </div>
        </div>`;

      gridEl.appendChild(card);
    }

    // reattach event handlers for newly added buttons
    qsa('.add-to-cart').forEach((b) =>
      b.addEventListener('click', (e) => addToCart(Number(e.currentTarget.dataset.id), 1))
    );

    qsa('.wishlist-btn').forEach((b) =>
      b.addEventListener('click', (e) => toggleWishlist(Number(e.currentTarget.dataset.id)))
    );

    // update prev/shown counters
    window.__bradethyProductsPreviouslyShownCount__ = shown;

    // Load more button visibility
    const loadMoreBtn = qs('#loadMoreBtn');
    if (loadMoreBtn) {
      if (shown < list.length) {
        loadMoreBtn.style.display = 'inline-block';
        loadMoreBtn.disabled = false;
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }

  // Load more handler
  function setupLoadMore() {
    const btn = qs('#loadMoreBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const list = window.__bradethyFilteredProducts__ || PRODUCTS.slice();
      window.__bradethyProductsShownCount__ = Math.min(list.length, (window.__bradethyProductsShownCount__ || window.__bradethyInitialShow) + (window.__bradethyLoadIncrement || 20));
      const grid = qs('#productGrid');
      renderProducts(grid, list, /*reset=*/false);
    });
  }

  // ---------- UI / State ----------
  function setupDarkMode() {
    const btn = qs('#darkModeToggle');
    const saved = load(STORAGE_KEYS.dark, false);
    const enabled = saved === true || saved === 'true';

    document.body.classList.toggle('dark-mode', enabled);

    if (btn) {
      // Render both icons; CSS will show the appropriate one depending on body.dark-mode
      btn.innerHTML = '<i class="fas fa-moon"></i><i class="fas fa-sun"></i>';
      btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
      btn.addEventListener('click', () => {
        const next = !document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode', next);
        btn.setAttribute('aria-pressed', next ? 'true' : 'false');
        save(STORAGE_KEYS.dark, next);
      });
    }
  }

  function setupMobileNav() {
    const hamburger = qs('#hamburgerBtn');
    const nav = qs('.nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
      const next = !nav.classList.contains('mobile-open');
      nav.classList.toggle('active', next);
      hamburger.classList.toggle('active', next);

      hamburger.setAttribute('aria-expanded', String(next));
      document.body.classList.toggle('mobile-nav-locked', next);
    });
  }

  function setupBackToTop() {
    const btt = qs('#backToTop');
    if (!btt) return;

    const onScroll = () => {
      btt.classList.toggle('visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onScroll();
  }

  function setupFloatingButtons() {
    const cartBtn = qs('#floatingCart');
    const wishBtn = qs('#floatingWishlist');

    const cartModal = qs('#cartModal');
    const wishModal = qs('#wishlistModal');

    if (cartBtn && cartModal) {
      cartBtn.addEventListener('click', () => openCartModal());
    }
    if (wishBtn && wishModal) {
      wishBtn.addEventListener('click', () => openModal(wishModal, renderWishlistModal));
    }

    document.addEventListener('click', (e) => {
      const target = e.target;
      if (cartModal && target === cartModal) closeModal(cartModal);
      if (wishModal && target === wishModal) closeModal(wishModal);
    });

    qs('#closeCart')?.addEventListener('click', () => closeCartModal());
    qs('#closeWishlist')?.addEventListener('click', () => closeModal(wishModal));
  }

  function setupCookieBanner() {
    const banner = qs('#cookieBanner');
    const acceptBtn = qs('#cookieAccept');
    const declineBtn = qs('#cookieDecline');

    if (!banner || !acceptBtn || !declineBtn) return;

    const consent = load(STORAGE_KEYS.cookieConsent, null);
    if (consent === 'accepted' || consent === 'declined') return;

    banner.classList.add('show');

    const hide = () => banner.classList.remove('show');

    acceptBtn.addEventListener('click', () => {
      save(STORAGE_KEYS.cookieConsent, 'accepted');
      hide();
    });
    declineBtn.addEventListener('click', () => {
      save(STORAGE_KEYS.cookieConsent, 'declined');
      hide();
    });
  }

  function setupProductControls() {
    const searchBtn = qs('#searchBtn');
    const searchInput = qs('#productSearch');
    const categoryFilter = qs('#categoryFilter');
    const priceSort = qs('#priceSort');

    if (!qs('#productGrid') || (!searchInput && !categoryFilter && !priceSort && !searchBtn)) return;

    const rerender = () => applyProductSearchFilterSort();

    searchBtn?.addEventListener('click', rerender);
    searchInput?.addEventListener('input', () => {
      window.clearTimeout(window.__bradethySearchT);
      window.__bradethySearchT = window.setTimeout(rerender, 150);
    });

    categoryFilter?.addEventListener('change', rerender);
    priceSort?.addEventListener('change', rerender);
  }

  function initHeaderYear() {
    const y = qs('#currentYear');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function setupContactForm() {
    const form = qs('#contactForm');
    if (!form) return;

    const statusEl = qs('#contactFormStatus');
    const submitBtn = qs('#contactSubmitBtn');

    function setStatus(msg, type = 'info') {
      if (!statusEl) return;
      statusEl.textContent = msg || '';
      statusEl.dataset.type = type;
    }

    function setSubmitting(submitting) {
      if (submitBtn) submitBtn.disabled = !!submitting;
      const spinner = submitBtn?.querySelector('.btn-spinner');
      if (spinner) spinner.style.display = submitting ? 'inline-block' : 'none';
    }

    form.addEventListener('submit', (e) => {
      // If the form is configured to use FormSubmit (data-form="formsubmit"),
      // allow the browser to perform a normal POST so FormSubmit can process it.
      const usesFormSubmit = String(form.getAttribute('data-form') || '').toLowerCase() === 'formsubmit';

      if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
        e.preventDefault();
        setStatus('Please complete all required fields correctly before sending.', 'error');
        return;
      }

      if (usesFormSubmit) {
        // Let the browser submit the form to FormSubmit. Show a brief status.
        setStatus('Sending your message…', 'info');
        setSubmitting(true);
        // Do not call preventDefault — allow normal POST flow and redirect via _next
        return;
      }

      // Fallback/legacy behavior: build a WhatsApp URL and open it.
      const fd = new FormData(form);
      const name = String(fd.get('name') || '').trim();
      const email = String(fd.get('email') || '').trim();
      const phone = String(fd.get('phone') || '').trim();
      const topic = String(fd.get('topic') || '').trim();
      const message = String(fd.get('message') || '').trim();

      const DEFAULT_TO = '263772814702';
      let toNumber = DEFAULT_TO;
      const action = String(form.getAttribute('action') || '');
      const m = action.match(/https?:\/\/wa\.me\/(\d+)/i) || action.match(/wa\.me\/(\d+)/i);
      if (m?.[1]) toNumber = m[1];

      const text = [
        'Hi Bradethy Team,',
        '',
        `Name: ${name || '-'}`,
        `Email: ${email || '-'}`,
        `Phone: ${phone || '-'}`,
        `Topic: ${topic || '-'}`,
        '',
        'Message:',
        `${message || '-'}`,
      ].join('\n');

      const waUrl = `https://wa.me/${encodeURIComponent(toNumber)}?text=${encodeURIComponent(text)}`;

      e.preventDefault();
      setStatus('Sending your message…', 'info');
      setSubmitting(true);

      form.setAttribute('action', waUrl);
      form.submit();
    });

    qsa('input, select, textarea', form).forEach((el) => {
      el.addEventListener('input', () => setStatus('', 'info'));
      el.addEventListener('change', () => setStatus('', 'info'));
    });
  }

  // ---------- Init ----------
  function init() {
    // Attempt one-time migration from legacy storage key ('bradethyCart') to canonical key
    (function migrateLegacyCart() {
      try {
        const mainRaw = localStorage.getItem(STORAGE_KEYS.cart);
        const legacyRaw = localStorage.getItem(' ' + STORAGE_KEYS.cart);
        if ((!mainRaw || mainRaw === 'null') && legacyRaw && legacyRaw !== 'null') {
          try {
            const parsed = JSON.parse(legacyRaw);
            if (Array.isArray(parsed) || (parsed && typeof parsed === 'object')) {
              localStorage.setItem(STORAGE_KEYS.cart, legacyRaw);
              console.info('Migrated legacy cart data into canonical key:', STORAGE_KEYS.cart);
            }
          } catch (e) {
            // ignore parse errors
          }
        }
      } catch (e) {
        // ignore storage errors
      }
    })();

    cart = normalizeCart(load(STORAGE_KEYS.cart, []));

    setupCheckoutHandler();

    wishlist = Array.isArray(load(STORAGE_KEYS.wishlist, []))
      ? load(STORAGE_KEYS.wishlist, []).map((x) => ({
          id: Number(x.id),
          name: String(x.name ?? ''),
          price: Number(x.price ?? 0),
        })).filter((x) => x.id && x.name)
      : [];

    // Ensure heart buttons on the page reflect stored wishlist state
    try { syncWishlistButtonsOnPage(); } catch (e) { /* ignore */ }

    setupCookieBanner();
    setupDarkMode();
    setupMobileNav();
    setupBackToTop();
    setupFloatingButtons();
    setupProductControls();
  setupLoadMore();
    initHeaderYear();

    // Initial renders only if containers exist
    if (qs('#productGrid')) {
      applyProductSearchFilterSort();
      // initialize filtered list if not set
      if (!window.__bradethyFilteredProducts__) window.__bradethyFilteredProducts__ = PRODUCTS.slice();
    }

    renderCartCount();
    renderWishlistCount();
    renderCartModal();
    renderWishlistModal();

    setupContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.BradethyApp = {
    init,
    addToCart,
    updateCartQty,
    removeFromCart,
    toggleWishlist,
    getCart: () => cart.slice(),
    getWishlist: () => wishlist.slice(),
  };

  // Debug helper: call from browser console to inspect cart/localStorage and open the cart modal
  window.debugRenderCart = function debugRenderCart() {
    console.log('STORAGE_KEYS.cart ->', STORAGE_KEYS.cart);
    try {
      console.log('localStorage[bradethyCart] ->', JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || 'null'));
    } catch (e) {
      console.log('localStorage[bradethyCart] parse error', e);
    }
    try {
      console.log("localStorage['bradethyCart'] ->", JSON.parse(localStorage.getItem(' ' + STORAGE_KEYS.cart) || 'null'));
    } catch (e) {
      console.log("localStorage['bradethyCart'] parse error", e);
    }
    cart = normalizeCart(load(STORAGE_KEYS.cart, []));
    console.log('Normalized cart:', cart);
    const modal = qs('#cartModal');
    if (modal) {
      // Render and open modal via the cart manager
      openCartModal();

      // Inspect the cart-items DOM after rendering
      const itemsEl = qs('#cartItems');
      if (itemsEl) {
        console.log('#cartItems.innerHTML ->', itemsEl.innerHTML);
        try {
          const cs = window.getComputedStyle(itemsEl);
          console.log('#cartItems computed style:', {
            display: cs.display,
            visibility: cs.visibility,
            height: cs.height,
            maxHeight: cs.maxHeight,
            overflowY: cs.overflowY,
          });
        } catch (e) {
          console.log('computedStyle error', e);
        }
      }
    }
  };

  // --- Service worker registration (idempotent and safe) ---
  // Registers /sw.js when available on secure contexts (https or localhost).
  // Shows a small toast when content is cached or when an update is available.
  (function registerServiceWorker() {
    try {
      if (!('serviceWorker' in navigator)) return;
      if (!(location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) return;

      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.info('PWA: Service worker registered', reg);

            // New service worker found — monitor its state changes
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (!newWorker) return;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed') {
                  // If there's an active controller, this is an update
                  if (navigator.serviceWorker.controller) {
                    try {
                      showToast('Update available — refresh to apply');
                    } catch (e) {}
                    console.info('PWA: New content installed (update available)');
                  } else {
                    try {
                      showToast('App ready for offline use');
                    } catch (e) {}
                    console.info('PWA: Content cached for offline use');
                  }
                }
              });
            });

            // When a new SW takes control, reload so the page runs under the new SW.
            navigator.serviceWorker.addEventListener('controllerchange', () => {
              console.info('PWA: controllerchange — reloading to activate new service worker');
              if (!window.__bradethySwReloading) {
                window.__bradethySwReloading = true;
                window.location.reload();
              }
            });
          })
          .catch((err) => console.warn('PWA: Service worker registration failed', err));
      });
    } catch (e) {
      // swallow registration errors to avoid crashing the app in older browsers
      console.warn('PWA: SW registration error', e);
    }
  })();

  // Global safeguard: if focus ever appears inside an element whose ancestor has aria-hidden="true",
  // move focus out. This prevents the accessibility error where a focused element is hidden from AT.
  document.addEventListener('focusin', (e) => {
    try {
      const focused = e.target;
      if (!(focused instanceof Element)) return;

      // Find the nearest ancestor (including self) that is a dialog/modal and has aria-hidden="true"
      const hiddenAncestor = focused.closest('.cart-modal[aria-hidden="true"], .wishlist-modal[aria-hidden="true"], [role="dialog"][aria-hidden="true"]');
      if (hiddenAncestor) {
        // Move focus to last known focus or to the document body.
        const last = window.__bradethyLastFocus__;
        if (last && typeof last.focus === 'function') last.focus();
        else (document.body || document.documentElement).focus?.();
        // Optionally log for debugging
        console.warn('Focus moved out of aria-hidden element:', hiddenAncestor);
      }
    } catch (err) {
      // ignore
    }
  });

  // ---------- beforeinstallprompt (custom install UI) ----------
  (function setupInstallPrompt() {
    let deferredPrompt = null;

    function showInstallButton(show) {
      try {
        const btn = document.getElementById('installBtn');
        if (!btn) return;
        btn.style.display = show ? 'inline-flex' : 'none';
      } catch (e) {
        // ignore
      }
    }

    // Listen for the browser's beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      deferredPrompt = e;
      // Show the install button in the UI
      showInstallButton(true);
      console.info('PWA: beforeinstallprompt fired — showing install button');
    });

    // When user clicks the install button, show the prompt
    document.addEventListener('click', (ev) => {
      const target = ev.target instanceof Element ? ev.target.closest && ev.target.closest('#installBtn') : null;
      if (!target) return;
      ev.preventDefault();
      if (!deferredPrompt) {
        showToast('Install not available');
        return;
      }

      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user's response
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          showToast('Thanks — app installed');
          console.info('PWA: user accepted the install prompt');
        } else {
          showToast('Install dismissed');
          console.info('PWA: user dismissed the install prompt');
        }
        // Clear the saved prompt — it can only be used once
        deferredPrompt = null;
        showInstallButton(false);
      });
    });

    // If app is already installed (platform-specific), hide button
    window.addEventListener('appinstalled', () => {
      showToast('App installed');
      showInstallButton(false);
      deferredPrompt = null;
      console.info('PWA: appinstalled event fired');
    });

    // Attempt small heuristic: if display mode is standalone already, hide button
    try {
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        showInstallButton(false);
      }
    } catch (e) {
      // ignore
    }
  })();
})(window, document);

