// Cart Module - Shopping Cart Functionality

// Cart State
let cart = [];

// DOM Elements
const cartCount = document.getElementById('cartCount');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

// Increase Quantity
function increaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
        saveCart();
    }
}

// Decrease Quantity
function decreaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
        saveCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(productId);
    }
}

// Update Cart UI
function updateCart() {
    if (!cartCount || !cartItems || !cartTotal) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    cartItems.innerHTML = cart.length === 0
        ? '<p class="empty-cart">Your cart is empty</p>'
        : cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)}</span>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Add listeners
    document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => decreaseQuantity(parseInt(e.target.dataset.id)));
    });

    document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
        btn.addEventListener('click', (e) => increaseQuantity(parseInt(e.target.dataset.id)));
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => removeFromCart(parseInt(e.target.dataset.id)));
    });
}

// Save Cart
function saveCart() {
    try {
        localStorage.setItem('bradethyCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart:', e);
    }
}

// Load Cart
function loadCart() {
    try {
        const saved = localStorage.getItem('bradethyCart');
        if (saved) {
            cart = JSON.parse(saved);
            updateCart();
        }
    } catch (e) {
        console.error('Failed to load cart:', e);
    }
}

// Generate Cart Summary for WhatsApp
function generateCartSummary(name, phone, address) {
    let summary = `* Bradethy Order*\n\n`;
    summary += `Customer: ${name}\n`;
    if (phone) summary += `Phone: ${phone}\n`;
    if (address) summary += `Shipping: ${address}\n\n`;
    summary += `*Cart Summary:*\n`;

    cart.forEach(item => {
        summary += `${item.icon} ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summary += `\n*Total: $${total.toFixed(2)}*\n\n`;
    summary += `Thank you for shopping with us! 🏨`;

    return summary;
}

// Checkout via WhatsApp
async function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    const originalText = checkoutBtn ? checkoutBtn.textContent : 'Checkout';
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Processing...';
    }
    showNotification('Preparing your order...');

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        const customerName = prompt('Please enter your name:') || 'Customer';
        const customerPhone = prompt('Please enter your phone number (optional):') || '';
        const shippingAddress = prompt('Please enter your shipping address (optional):') || '';
        const summary = generateCartSummary(customerName, customerPhone, shippingAddress);

        const whatsappNumber = '260760678894';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}`;
        window.open(whatsappUrl, '_blank');

        cart = [];
        updateCart();
        saveCart();
        if (cartModal) cartModal.classList.remove('active');
        showNotification('Order sent to WhatsApp!');
    } catch (e) {
        showNotification('Checkout interrupted. Please try again.');
    } finally {
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = originalText;
        }
    }
}

// Toggle Cart Modal
function toggleCart() {
    const overlay = document.getElementById('comingSoonOverlay');
    // If coming-soon overlay is visible, don't open the cart behind it.
    if (overlay && overlay.style.display !== 'none') return;

    if (cartModal) {
        cartModal.classList.toggle('active');
        cartModal.setAttribute('aria-hidden', !cartModal.classList.contains('active'));
    }
}


// Initialize Cart
function initCart() {
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
        cartIcon.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCart();
            }
        });
    }
    if (closeCart) closeCart.addEventListener('click', () => cartModal && cartModal.classList.remove('active'));
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    
    loadCart();
}
