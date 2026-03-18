// ===== WhatsApp Configuration =====
const WHATSAPP_NUMBER = '260760678894'; // Replace with your WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_API = 'https://api.whatsapp.com/send';

// ===== Product Data =====
const products = [
    {
        id: 1,
        name: 'Cardboard Shipping Boxes',
        category: 'boxes',
        price: 45.99,
        image: '📦',
        description: 'High-quality cardboard boxes perfect for shipping. Crush-resistant and durable.',
        stock: true,
        features: ['3-ply kraft paper', 'Crush-resistant', 'Easy assembly', 'Recyclable']
    },
    {
        id: 2,
        name: 'Small Storage Boxes',
        category: 'boxes',
        price: 28.99,
        image: '📦',
        description: 'Perfect for storage and small-item packaging. Compact and stackable.',
        stock: true,
        features: ['Stackable design', 'Compact size', 'Lightweight', 'Affordable']
    },
    {
        id: 3,
        name: 'Protective Bubble Wrap',
        category: 'protection',
        price: 35.99,
        image: '🛡️',
        description: 'Premium bubble wrap for protecting fragile items during shipping.',
        stock: true,
        features: ['1/2 inch bubbles', '150 ft roll', 'Waterproof', 'Protective']
    },
    {
        id: 4,
        name: 'Kraft Paper Bags',
        category: 'bags',
        price: 22.50,
        image: '🛍️',
        description: 'Large kraft paper bags ideal for retail packaging and gift wrapping.',
        stock: true,
        features: ['Brown kraft paper', '10x5x13 size', 'Twisted handles', 'Recyclable']
    },
    {
        id: 5,
        name: 'Clear Poly Mailers',
        category: 'bags',
        price: 19.99,
        image: '🛍️',
        description: 'Waterproof poly mailers for e-commerce shipping. Self-sealing.',
        stock: true,
        features: ['Self-sealing', 'Waterproof', '10x13 size', 'Tamper-evident']
    },
    {
        id: 6,
        name: 'Pressure Sensitive Labels',
        category: 'labels',
        price: 55.00,
        image: '🏷️',
        description: 'Custom printable labels for branding and product identification.',
        stock: true,
        features: ['Waterproof', 'Customizable', 'High-adhesion', '1000 labels']
    },
    {
        id: 7,
        name: 'Kraft Packing Tape',
        category: 'tape',
        price: 12.99,
        image: '🎀',
        description: 'Heavy-duty kraft paper packing tape. Strong adhesive for secure sealing.',
        stock: true,
        features: ['Heavy-duty adhesive', '2-inch width', 'Eco-friendly', '4 pack']
    },
    {
        id: 8,
        name: 'Clear Packing Tape',
        category: 'tape',
        price: 9.99,
        image: '🎀',
        description: 'Clear, transparent packing tape. Perfect for visible sealing.',
        stock: true,
        features: ['Transparent', 'Strong hold', '2-inch width', '6 pack']
    },
    {
        id: 9,
        name: 'Foam Sheet Protection',
        category: 'protection',
        price: 41.99,
        image: '🛡️',
        description: 'Closed-cell foam sheets for superior item protection.',
        stock: true,
        features: ['1/2 inch thick', 'Cushioning', 'Moisture-resistant', 'Reusable']
    },
    {
        id: 10,
        name: 'Shipping Label Printer',
        category: 'supplies',
        price: 189.99,
        image: '🖨️',
        description: 'High-speed thermal label printer for shipping labels.',
        stock: true,
        features: ['Thermal printing', '4x6 label support', 'USB connection', 'Fast printing']
    },
    {
        id: 11,
        name: 'Packing Peanuts',
        category: 'protection',
        price: 24.99,
        image: '🛡️',
        description: 'Biodegradable packing peanuts. Lightweight protection for fragile items.',
        stock: true,
        features: ['Biodegradable', 'Lightweight', '14 lb bag', 'Cushioning']
    },
    {
        id: 12,
        name: 'Tissue Paper Assortment',
        category: 'supplies',
        price: 16.50,
        image: '📄',
        description: 'Colorful tissue paper for gift wrapping and decoration.',
        stock: true,
        features: ['Multiple colors', '400 sheets', 'Lightweight', 'Eco-friendly']
    }
];

// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        el.textContent = `(${cartCount})`;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

// ===== Cart Page Functions =====
function displayCart() {
    const cartContainer = document.getElementById('cart-content');
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (cart.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContainer.style.display = 'grid';
    emptyCart.style.display = 'none';

    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${item.name}</strong>
                <br><small>${item.category}</small>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });

    const shipping = 10;
    const tax = (subtotal * 0.1);
    const total = subtotal + shipping + tax;

    subtotalEl.textContent = '$' + subtotal.toFixed(2);
    shippingEl.textContent = '$' + shipping.toFixed(2);
    taxEl.textContent = '$' + tax.toFixed(2);
    totalEl.textContent = '$' + total.toFixed(2);
}

// ===== Products Page Functions =====
function displayProducts(productsToShow = products, page = 'products') {
    const container = document.getElementById('products-list');
    if (!container) return;

    container.innerHTML = '';

    if (productsToShow.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found matching your criteria.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${product.category.toUpperCase()}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description.substring(0, 60)}...</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stock">${product.stock ? '✓ In Stock' : '✗ Out of Stock'}</div>
                <div class="product-actions">
                    <button class="btn-view" onclick="showProductdetail(${product.id})">View Details</button>
                    <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });

    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = `Showing ${productsToShow.length} products`;
    }
}

function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = products.slice(0, 6);
    displayProducts(featured, 'home');
}

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="product-modal">
            <div class="product-modal-image">${product.image}</div>
            <div class="product-modal-details">
                <h2>${product.name}</h2>
                <div class="product-modal-category">${product.category.toUpperCase()}</div>
                <div class="product-modal-description">${product.description}</div>
                <div class="product-modal-price">$${product.price.toFixed(2)}</div>
                <div class="product-modal-stock">${product.stock ? '✓ In Stock' : '✗ Out of Stock'}</div>
                <div class="product-modal-features">
                    <h4>Features:</h4>
                    <ul>
                        ${product.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-modal-quantity">
                    <label for="modal-qty">Quantity:</label>
                    <input type="number" id="modal-qty" min="1" value="1">
                </div>
                <button class="btn btn-primary full-width" onclick="addModalItem(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function showProductdetail(productId) {
    showProductModal(productId);
}

function addModalItem(productId) {
    const quantityInput = document.getElementById('modal-qty');
    const quantity = parseInt(quantityInput.value) || 1;
    addToCart(productId, quantity);
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    location.reload();
}

// ===== Filtering Functions =====
function filterProducts() {
    let filtered = [...products];

    // Category filter
    const categoryLinks = document.querySelectorAll('.category-filter a');
    let activeCategory = 'all';

    categoryLinks.forEach(link => {
        if (link.classList.contains('active')) {
            activeCategory = link.dataset.category;
        }
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            filterProducts();
        });
    });

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
            filterProducts();
        });

        const maxPrice = parseInt(priceRange.value);
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Sorting
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            if (sortBy === 'name') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === 'price-low') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-high') {
                filtered.sort((a, b) => b.price - a.price);
            }
            displayProducts(filtered);
        });
    }

    displayProducts(filtered);
}

// ===== Checkout Page Functions =====
function displayCheckoutSummary() {
    const itemsContainer = document.getElementById('checkout-items');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const taxEl = document.getElementById('checkout-tax');
    const totalEl = document.getElementById('checkout-total');
    const form = document.getElementById('checkout-form');

    if (!itemsContainer) return;

    itemsContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        itemsContainer.appendChild(itemDiv);
    });

    // Shipping calculation based on selected method
    let shipping = 10;

    const shippingRadios = document.querySelectorAll('input[name="shipping"]');
    shippingRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'standard') shipping = 10;
            if (e.target.value === 'express') shipping = 25;
            if (e.target.value === 'overnight') shipping = 50;
            updateCheckoutTotal();
        });
    });

    function updateCheckoutTotal() {
        const shippingRadios = document.querySelectorAll('input[name="shipping"]');
        let selectedShipping = 10;
        shippingRadios.forEach(radio => {
            if (radio.checked) {
                if (radio.value === 'standard') selectedShipping = 10;
                if (radio.value === 'express') selectedShipping = 25;
                if (radio.value === 'overnight') selectedShipping = 50;
            }
        });

        const tax = (subtotal * 0.1);
        const total = subtotal + selectedShipping + tax;

        if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
        if (shippingEl) shippingEl.textContent = '$' + selectedShipping.toFixed(2);
        if (taxEl) taxEl.textContent = '$' + tax.toFixed(2);
        if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
    }

    updateCheckoutTotal();

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const buyerName = document.getElementById('name').value;
            const buyerCompany = document.getElementById('company').value;
            const buyerEmail = document.getElementById('email').value;
            const buyerPhone = document.getElementById('phone').value;
            const shippingAddress = `${document.getElementById('address').value}, ${document.getElementById('city').value}, ${document.getElementById('state').value} ${document.getElementById('zip').value}`;
            
            // Get selected shipping method
            const shippingRadios = document.querySelectorAll('input[name="shipping"]');
            let selectedShipping = 'Standard';
            let shippingCost = 10;
            shippingRadios.forEach(radio => {
                if (radio.checked) {
                    if (radio.value === 'standard') { selectedShipping = 'Standard (5-7 days)'; shippingCost = 10; }
                    if (radio.value === 'express') { selectedShipping = 'Express (2-3 days)'; shippingCost = 25; }
                    if (radio.value === 'overnight') { selectedShipping = 'Overnight'; shippingCost = 50; }
                }
            });

            // Build WhatsApp message
            let message = '🛍️ *NEW ORDER FROM PACKAGEPRO*\n\n';
            message += '👤 *BUYER INFORMATION*\n';
            message += `Name: ${buyerName}\n`;
            if (buyerCompany) {
                message += `Company: ${buyerCompany}\n`;
            }
            message += `Email: ${buyerEmail}\n`;
            message += `Phone: ${buyerPhone}\n`;
            message += `Address: ${shippingAddress}\n\n`;
            
            message += '📦 *ORDER ITEMS*\n';
            let subtotal = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                message += `${item.name} x${item.quantity} = $${itemTotal.toFixed(2)}\n`;
            });
            
            message += `\n💰 *ORDER SUMMARY*\n`;
            message += `Subtotal: $${subtotal.toFixed(2)}\n`;
            message += `Shipping (${selectedShipping}): $${shippingCost.toFixed(2)}\n`;
            const tax = (subtotal * 0.1);
            message += `Tax (10%): $${tax.toFixed(2)}\n`;
            const total = subtotal + shippingCost + tax;
            message += `*TOTAL: $${total.toFixed(2)}*\n\n`;
            
            message += '✅ Customer will contact you to proceed with payment.';

            // Send to WhatsApp
            sendToWhatsApp(message);
        });
    }
}

function sendToWhatsApp(message) {
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_API}?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and redirect after delay
    setTimeout(() => {
        alert('Thank you for your order! Our team will contact you shortly via WhatsApp to confirm your order and process payment.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'index.html';
    }, 1000);
}

// ===== Contact Form =====
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        const subject = document.getElementById('contact-subject').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show success message
        showMessage('Thank you for contacting us! We will get back to you soon.', 'success');
        form.reset();
    });

    function showMessage(msg, type) {
        const messageEl = document.getElementById('form-message');
        messageEl.textContent = msg;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
}

// ===== Modal Close Handler =====
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// ===== Initialize Page =====
function initPage() {
    updateCartDisplay();

    // Home page
    if (document.getElementById('featured-products')) {
        displayFeaturedProducts();
    }

    // Products page
    if (document.getElementById('products-list')) {
        filterProducts();
    }

    // Cart page
    if (document.getElementById('cart-content')) {
        displayCart();
    }

    // Checkout page
    if (document.getElementById('checkout-items')) {
        displayCheckoutSummary();
    }

    // Contact page
    setupContactForm();

    // Modal
    setupModal();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initPage);
