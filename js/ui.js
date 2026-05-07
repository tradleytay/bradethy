// UI Module - User Interface Interactions

// Wishlist State
let wishlist = [];

// DOM Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('.nav');
const darkModeToggle = document.getElementById('darkModeToggle');
const promoBanner = document.getElementById('promoBanner');
const promoClose = document.getElementById('promoClose');
const backToTop = document.getElementById('backToTop');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');
const wishlistToggle = document.getElementById('wishlistToggle');
const wishlistModal = document.getElementById('wishlistModal');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');
const closeWishlist = document.getElementById('closeWishlist');

// Toggle Wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const exists = wishlist.find(item => item.id === productId);
    
    if (exists) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    updateWishlistDisplay();
    saveWishlist();
    if (typeof renderProducts === 'function') renderProducts();
}

// Update Wishlist Display
function updateWishlistDisplay() {
    if (!wishlistCount || !wishlistItems) return;
    
    wishlistCount.textContent = wishlist.length;
    
    wishlistItems.innerHTML = wishlist.length === 0
        ? '<p class="empty-wishlist">Your wishlist is empty</p>'
        : wishlist.map(item => `
            <div class="wishlist-item">
                <div class="wishlist-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
                <div>
                    <button class="btn-add-to-cart" data-id="${item.id}">Add to Cart</button>
                    <button class="remove-wishlist" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('');
    
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(parseInt(e.target.dataset.id));
            toggleWishlist(parseInt(e.target.dataset.id));
        });
    });
    
    document.querySelectorAll('.remove-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => toggleWishlist(parseInt(e.target.dataset.id)));
    });
}

// Save Wishlist
function saveWishlist() {
    try {
        localStorage.setItem(' bradethyWishlist', JSON.stringify(wishlist));
    } catch (e) {
        console.error('Failed to save wishlist:', e);
    }
}

// Load Wishlist
function loadWishlist() {
    try {
        const saved = localStorage.getItem(' bradethyWishlist');
        if (saved) {
            wishlist = JSON.parse(saved);
            updateWishlistDisplay();
        }
    } catch (e) {
        console.error('Failed to load wishlist:', e);
    }
}

// Toggle Mobile Nav
function toggleMobileNav() {
    if (nav && hamburgerBtn) {
        const willBeActive = !nav.classList.contains('active');
        nav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');

        // Ensure links are visible once active (covers any CSS overrides)
        if (willBeActive) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = '';
        }

        hamburgerBtn.setAttribute('aria-expanded', nav.classList.contains('active'));
    }
}


// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    saveDarkMode();
}

function saveDarkMode() {
    try {
        localStorage.setItem(' bradethyDarkMode', document.body.classList.contains('dark-mode'));
    } catch (e) {
        console.error('Failed to save dark mode:', e);
    }
}

function loadDarkMode() {
    try {
        const saved = localStorage.getItem(' bradethyDarkMode');
        if (saved === 'true') {
            document.body.classList.add('dark-mode');
            if (darkModeToggle) {
                const icon = darkModeToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            }
        }
    } catch (e) {
        console.error('Failed to load dark mode:', e);
    }
}

// Promo Banner
function closePromoBanner() {
    if (promoBanner) promoBanner.style.display = 'none';
    try {
        localStorage.setItem(' bradethyPromoDismissed', 'true');
    } catch (e) {
        console.error('Failed to save promo dismissal:', e);
    }
}

function checkPromoBanner() {
    try {
        const dismissed = localStorage.getItem(' bradethyPromoDismissed');
        if (dismissed === 'true' && promoBanner) promoBanner.style.display = 'none';
    } catch (e) {
        console.error('Failed to check promo:', e);
    }
}

// Back to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

// Newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('Thank you for subscribing!');
        document.getElementById('newsletterEmail').value = '';
    } else {
        showNotification('Please enter a valid email address');
    }
}

// FAQ Accordion
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Contact Form Validation
function validateContactForm() {
    const nameField = contactForm ? contactForm.querySelector('input[type="text"]') : null;
    const emailField = contactForm ? contactForm.querySelector('input[type="email"]') : null;
    const messageField = contactForm ? contactForm.querySelector('textarea') : null;

    if (!nameField || !emailField || !messageField) return false;

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    let isValid = true;

    if (!name || name.length < 2) {
        showFieldError(nameField, 'Name must be at least 2 characters');
        isValid = false;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError(emailField, 'Please enter a valid email');
        isValid = false;
    }
    if (!message || message.length < 10) {
        showFieldError(messageField, 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function showFieldError(field, message) {
    let error = field.parentNode.querySelector('.error');
    if (error) error.remove();
    error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add Notification Styles
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            transition: transform 0.3s ease;
        }
        .notification.show { transform: translateX(-50%) translateY(0); }
        .empty-cart, .empty-wishlist {
            text-align: center;
            color: var(--gray);
            padding: 2rem;
        }
        .error { color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; }
    `;
    document.head.appendChild(style);
}

// Initialize UI
function initUI() {
    // Mobile nav
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileNav);
        hamburgerBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileNav();
            }
        });
    }
    
    // Dark mode
    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Promo
    if (promoClose) promoClose.addEventListener('click', closePromoBanner);
    
    // Back to top
    window.addEventListener('scroll', handleScroll);
    if (backToTop) backToTop.addEventListener('click', scrollToTop);
    
    // Newsletter
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Wishlist modal
    if (wishlistToggle) {
        wishlistToggle.addEventListener('click', () => {
            if (wishlistModal) {
                wishlistModal.classList.toggle('active');
                wishlistModal.setAttribute('aria-hidden', !wishlistModal.classList.contains('active'));
            }
        });
        wishlistToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (wishlistModal) wishlistModal.classList.toggle('active');
            }
        });
    }
    if (closeWishlist) closeWishlist.addEventListener('click', () => wishlistModal && wishlistModal.classList.remove('active'));
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const statusEl = document.getElementById('contactFormStatus');
            const submitBtn = document.getElementById('contactSubmitBtn');

            if (!validateContactForm()) return;

            // Loading state
            if (statusEl) {
                statusEl.className = 'form-status show';
                statusEl.textContent = 'Sending...';
            }
            if (submitBtn) {
                contactForm.classList.add('sending');
                submitBtn.setAttribute('disabled', 'true');
            }

            // Simulate send (no backend in this project)
            await new Promise(resolve => setTimeout(resolve, 900));

            if (statusEl) {
                statusEl.className = 'form-status success show';
                statusEl.textContent = 'Thanks! Your message has been sent. We will get back to you soon.';
            } else {
                alert('Thank you for your message! We will get back to you soon.');
            }

            contactForm.reset();
            contactForm.querySelectorAll('.error').forEach(el => el.remove());
            contactForm.classList.remove('sending');
            if (submitBtn) submitBtn.removeAttribute('disabled');
        });
    }
    
    // FAQ
    setupFAQAccordion();
    
    // Add styles
    addNotificationStyles();
    
    // Load states
    loadDarkMode();
    checkPromoBanner();
    loadWishlist();
    
    // Global handlers
    document.addEventListener('click', (e) => {
        if (e.target === cartModal && cartModal) {
            cartModal.classList.remove('active');
        }
        if (e.target === wishlistModal && wishlistModal) {
            wishlistModal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (cartModal) cartModal.classList.remove('active');
            if (wishlistModal) wishlistModal.classList.remove('active');
            if (nav && hamburgerBtn) {
                nav.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        }
    });
}
