// ===== WhatsApp Configuration =====
const WHATSAPP_NUMBER = '260760678894'; // Replace with your WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_API = 'https://api.whatsapp.com/send';

// ===== Loyalty Configuration =====
const POINTS_PER_DOLLAR = 0.05; // 1 point for every $20 spent
let loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints') || '0', 10);

function updateLoyaltyDisplay() {
    const loyaltyEl = document.getElementById('loyalty-points');
    if (loyaltyEl) {
        loyaltyEl.textContent = `(${loyaltyPoints})`;
    }
}

function addLoyaltyPoints(orderSubtotal) {
    const pointsEarned = Math.floor(orderSubtotal * POINTS_PER_DOLLAR);
    loyaltyPoints += pointsEarned;
    localStorage.setItem('loyaltyPoints', loyaltyPoints);
    updateLoyaltyDisplay();
    return pointsEarned;
}

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
function displayProducts(productsToShow = products, containerId = 'products-list') {
    const container = document.getElementById(containerId);
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
            <div class="product-image"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>
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
    const featured = products.slice(0, 4);
    displayProducts(featured, 'featured-products');
}

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="product-modal">
            <div class="product-modal-image"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"></div>
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
    const paymentEl = document.getElementById('checkout-payment');
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

        const paymentRadios = document.querySelectorAll('input[name="payment"]');
        let selectedPayment = 'Cash on Delivery';
        paymentRadios.forEach(radio => {
            if (radio.checked) {
                if (radio.value === 'cash_on_delivery') selectedPayment = 'Cash on Delivery';
                if (radio.value === 'mobile_money') selectedPayment = 'Mobile Money / Bank Transfer';
            }
        });

        const tax = (subtotal * 0.1);
        const total = subtotal + selectedShipping + tax;

        if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
        if (shippingEl) shippingEl.textContent = '$' + selectedShipping.toFixed(2);
        if (taxEl) taxEl.textContent = '$' + tax.toFixed(2);
        if (paymentEl) paymentEl.textContent = selectedPayment;
        if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
    }

    updateCheckoutTotal();

    // Payment method change handler
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const mobilePaymentDetails = document.getElementById('mobile-payment-details');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'mobile_money') {
                mobilePaymentDetails.style.display = 'block';
            } else {
                mobilePaymentDetails.style.display = 'none';
            }
            updateCheckoutTotal();
        });
    });

    // Shipping method change handler
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');
    shippingRadios.forEach(radio => {
        radio.addEventListener('change', updateCheckoutTotal);
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const buyerName = document.getElementById('name').value;
            const buyerCompany = document.getElementById('company').value;
            const buyerEmail = document.getElementById('email').value;
            const buyerPhone = document.getElementById('phone').value;
            
            // Shipping method
            const shippingRadios = document.querySelectorAll('input[name="shipping"]');
            let selectedShipping = 'standard';
            let shippingCost = 10;
            shippingRadios.forEach(radio => {
                if (radio.checked) {
                    selectedShipping = radio.value;
                    if (radio.value === 'standard') shippingCost = 10;
                    if (radio.value === 'express') shippingCost = 25;
                    if (radio.value === 'overnight') shippingCost = 50;
                }
            });
            
            // Payment method
            const paymentRadios = document.querySelectorAll('input[name="payment"]');
            let selectedPayment = 'cash_on_delivery';
            paymentRadios.forEach(radio => {
                if (radio.checked) {
                    selectedPayment = radio.value;
                }
            });
            
            // Build WhatsApp message
            let message = '🛍️ *NEW ORDER FROM BRADETHY*\n\n';
            
            message += '👤 *BUYER INFORMATION*\n';
            message += `Name: ${buyerName}\n`;
            if (buyerCompany) {
                message += `Company: ${buyerCompany}\n`;
            }
            message += `Email: ${buyerEmail}\n`;
            message += `Phone: ${buyerPhone}\n`;
            
            const address = document.getElementById('address') ? document.getElementById('address').value.trim() : '';
            const city = document.getElementById('city') ? document.getElementById('city').value.trim() : '';
            const state = document.getElementById('state') ? document.getElementById('state').value.trim() : '';
            const zip = document.getElementById('zip') ? document.getElementById('zip').value.trim() : '';
            const country = document.getElementById('country') ? document.getElementById('country').value.trim() : '';

            if (address || city || state || zip || country) {
                message += '\n📍 *SHIPPING ADDRESS*\n';
                if (address) message += `${address}\n`;
                if (city || state || zip) message += `${city}${city && (state||zip)?', ': ''}${state}${(state && zip)?' ':''}${zip ? zip : ''}\n`;
                if (country) message += `${country}\n`;
            }

            message += `\n🚚 *SHIPPING METHOD*\n`;
            message += `${selectedShipping.charAt(0).toUpperCase() + selectedShipping.slice(1)} Shipping ($${shippingCost.toFixed(2)})\n`;
            
            message += `\n💳 *PAYMENT METHOD*\n`;
            if (selectedPayment === 'cash_on_delivery') {
                message += 'Cash on Delivery\n';
            } else {
                message += 'Mobile Money / Bank Transfer\n';
                const mobileNetwork = document.getElementById('mobile-network').value;
                const accountNumber = document.getElementById('account-number').value;
                const accountName = document.getElementById('account-name').value;
                if (mobileNetwork) message += `Network/Bank: ${mobileNetwork}\n`;
                if (accountNumber) message += `Account/Phone: ${accountNumber}\n`;
                if (accountName) message += `Account Name: ${accountName}\n`;
            }
            
            message += '\n📦 *ORDER ITEMS*\n';
            let subtotal = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                message += `${item.name} x${item.quantity} = $${itemTotal.toFixed(2)}\n`;
            });
            
            message += `\n💰 *ORDER SUMMARY*\n`;
            message += `Subtotal: $${subtotal.toFixed(2)}\n`;
            message += `Delivery: $${shippingCost.toFixed(2)}\n`;
            const tax = (subtotal * 0.1);
            message += `Tax (10%): $${tax.toFixed(2)}\n`;
            const total = subtotal + shippingCost + tax;
            message += `*TOTAL: $${total.toFixed(2)}*\n\n`;
            
            // Add loyalty points for this purchase
            const pointsEarned = addLoyaltyPoints(subtotal);
            message += `🎁 *LOYALTY POINTS*\n`;
            message += `You earned ${pointsEarned} points from this order!\n`;
            message += `Your total points: ${loyaltyPoints}\n\n`;
            
            message += '✅ Thank you for your order! We will contact you shortly to confirm the details and process payment.';

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
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
}

function initPage() {
    updateYear();
    setupMobileNav();
    updateCartDisplay();
    updateLoyaltyDisplay();

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
