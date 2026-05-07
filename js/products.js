// Products Module - Product Data and Rendering

// Product Data with Detailed Information
const products = [
    {
        id: 1,
        name: "Shampoo 500ml",
        price: 4.99,
        originalPrice: 6.99,
        icon: "🧴",
        description: "Luxury hotel guest shampoo, pleasant scent",
        category: "amenities",
        onSale: true,
        stock: 15,
        details: {
            brand: " Bradethy Pro",
            sku: "SH-500ML",
            weight: "500ml",
            ingredients: "Aqua, Sodium Lauryl Sulfate, Cocamide DEA, Glycerin, Fragrance, Citric Acid",
            features: ["pH balanced", "Paraben-free", "Luxury scent", "Large format for bulk use"],
            usage: "Apply to damp hair, massage gently and rinse thoroughly. For external use only.",
            warnings: "Avoid eye contact. If irritation occurs, discontinue use."
        }
    },
    {
        id: 2,
        name: "Hand Soap Refill",
        price: 2.99,
        icon: "🧼",
        description: "Antibacterial hand soap for guest rooms",
        category: "amenities",
        onSale: false,
        stock: 50,
        details: {
            brand: " Bradethy Pro",
            sku: "HS-REFILL",
            weight: "500ml",
            ingredients: "Aqua, Triclosan, Sodium Laureth Sulfate, Aloe Vera, Vitamin E",
            features: ["Antibacterial", "Moisturizing formula", "Refillable bottle", "Hotel-grade quality"],
            usage: "Pump onto hands, lather and rinse with water.",
            warnings: "For external use only. Keep out of reach of children."
        }
    },
    {
        id: 3,
        name: "All-Purpose Cleaner",
        price: 6.99,
        originalPrice: 9.99,
        icon: "🧽",
        description: "Professional multi-surface cleaning spray",
        category: "cleaning",
        onSale: true,
        stock: 8,
        details: {
            brand: " Bradethy Pro",
            sku: "APC-750ML",
            weight: "750ml",
            ingredients: "Water, Isopropyl Alcohol, Surfactants, Degreaser Agents",
            features: ["Multi-surface", "Streak-free", "Industrial strength", "Citrus scent"],
            usage: "Spray directly on surface, wipe with clean cloth. No rinsing required.",
            warnings: "Wear gloves. Do not mix with bleach or ammonia."
        }
    },
    {
        id: 4,
        name: "Coffee Pods Box (20ct)",
        price: 12.99,
        icon: "☕",
        description: "Premium ground coffee pods for in-room service",
        category: "beverages",
        onSale: false,
        stock: 35,
        details: {
            brand: "Premium Roast Co.",
            sku: "CP-20CT",
            weight: "200g",
            ingredients: "100% Arabica Coffee",
            features: ["Medium roast", "Compatible with major pod machines", "Freshly roasted", "Fair trade certified"],
            usage: "Insert pod into compatible coffee machine and brew as directed.",
            warnings: "Contains caffeine. Not for persons with coffee allergies."
        }
    },
    {
        id: 5,
        name: "Bath Towel Set",
        price: 19.99,
        originalPrice: 24.99,
        icon: "🛁",
        description: "Soft 100% cotton bath towels, bulk pack",
        category: "bedding",
        onSale: true,
        stock: 22,
        details: {
            brand: " Bradethy Pro",
            sku: "BT-SET-2",
            weight: "600g per towel",
            material: "100% Egyptian Cotton",
            features: ["600 GSM", "Machine washable", "Quick dry", "Hotel quality"],
            usage: "Wash before first use. Machine wash cold with similar colors.",
            warnings: "Do not use bleach. Tumble dry low."
        }
    },
    {
        id: 6,
        name: "Disinfectant Wipes",
        price: 8.99,
        icon: "🧻",
        description: "Individually wrapped surface cleaning wipes",
        category: "cleaning",
        onSale: false,
        stock: 0,
        details: {
            brand: " Bradethy Pro",
            sku: "DW-80CT",
            weight: "80 wipes",
            ingredients: "Isopropyl Alcohol (70%), Aloe Vera, Vitamin E",
            features: ["Kills 99.9% of bacteria", " Individually wrapped", "Moisture-lock packaging", "Hospital grade"],
            usage: "Wipe surface and allow to dry. No rinsing needed.",
            warnings: "Flammable. Keep away from heat sources. For external use only."
        }
    }
];

// All products for filtering
let filteredProducts = [...products];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const productSearch = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const priceSort = document.getElementById('priceSort');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

// Render Products
function renderProducts() {
    if (!productGrid) return;
    
    productGrid.innerHTML = filteredProducts.map(product => {
        const isInWishlist = wishlist ? wishlist.some(item => item.id === product.id) : false;
        const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
        
        // Stock status
        let stockStatus = 'in-stock';
        let stockText = 'In Stock';
        if (product.stock === 0) {
            stockStatus = 'out-of-stock';
            stockText = 'Out of Stock';
        } else if (product.stock <= 10) {
            stockStatus = 'low-stock';
            stockText = `Only ${product.stock} left`;
        }
        
        return `
        <div class="product-card" role="listitem">
            ${product.onSale ? `<span class="sale-badge">-${discount}%</span>` : ''}
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add ${product.name} to wishlist">
                <i class="fas fa-heart"></i>
            </button>
            <div class="product-image" aria-label="${product.name} image">${product.icon}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="stock-status ${stockStatus}">
                    <span class="stock-dot"></span>
                    <span>${stockText}</span>
                </div>
                <div class="price" aria-label="Price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    $${product.price.toFixed(2)}
                </div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}" aria-label="View details for ${product.name}">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="add-to-cart" data-id="${product.id}" aria-label="Add ${product.name} to cart">Add to Cart</button>
                </div>
            </div>
        </div>
    `}).join('');

    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.wishlist-btn').dataset.id);
            toggleWishlist(productId);
        });
    });

    // View Details button listeners
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.view-details').dataset.id);
            openProductDetails(productId);
        });
    });
}

// Open Product Details Modal
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal if not exists
    let modal = document.getElementById('productDetailsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productDetailsModal';
        modal.className = 'product-details-modal';
        document.body.appendChild(modal);
    }
    
    // Stock status
    let stockStatus = 'in-stock';
    let stockText = 'In Stock';
    if (product.stock === 0) {
        stockStatus = 'out-of-stock';
        stockText = 'Out of Stock';
    } else if (product.stock <= 10) {
        stockStatus = 'low-stock';
        stockText = `Only ${product.stock} left`;
    }
    
    // Build features list
    const featuresList = product.details.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
    
    modal.innerHTML = `
        <div class="details-modal-content">
            <button class="details-close" aria-label="Close"><i class="fas fa-times"></i></button>
            <div class="details-image">${product.icon}</div>
            <div class="details-info">
                <span class="details-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="stock-status ${stockStatus}">
                    <span class="stock-dot"></span>
                    <span>${stockText}</span>
                </div>
                <div class="details-price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    $${product.price.toFixed(2)}
                </div>
                <p class="details-description">${product.description}</p>
                
                <div class="details-specs">
                    <h4><i class="fas fa-box"></i> Product Details</h4>
                    <ul>
                        <li><strong>Brand:</strong> ${product.details.brand}</li>
                        <li><strong>SKU:</strong> ${product.details.sku}</li>
                        <li><strong>Weight:</strong> ${product.details.weight}</li>
                        ${product.details.material ? `<li><strong>Material:</strong> ${product.details.material}</li>` : ''}
                    </ul>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas fa-list"></i> Features</h4>
                    <ul class="features-list">${featuresList}</ul>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas fa-flask"></i> Ingredients</h4>
                    <p class="ingredients">${product.details.ingredients}</p>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas faDirections"></i> Usage</h4>
                    <p>${product.details.usage}</p>
                </div>
                
                <div class="details-warnings">
                    <h4><i class="fas fa-exclamation-triangle"></i> Warnings</h4>
                    <p>${product.details.warnings}</p>
                </div>
                
                <div class="details-actions">
                    <button class="add-to-cart details-add-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close button
    modal.querySelector('.details-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Add to cart from modal
    modal.querySelector('.details-add-cart')?.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
        modal.classList.remove('active');
    });
}

// Filter Products
function filterProducts() {
    const searchTerm = productSearch ? productSearch.value.toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value : '';
    const sort = priceSort ? priceSort.value : '';
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    if (sort === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
    else if (sort === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    
    renderProducts();
}

// Save Filters
function saveFilters() {
    try {
        localStorage.setItem(' bradethyFilters', JSON.stringify({
            search: productSearch ? productSearch.value : '',
            category: categoryFilter ? categoryFilter.value : '',
            sort: priceSort ? priceSort.value : ''
        }));
    } catch (e) {
        console.error('Failed to save filters:', e);
    }
}

// Load Filters
function loadFilters() {
    try {
        const saved = localStorage.getItem(' bradethyFilters');
        if (saved && productSearch && categoryFilter && priceSort) {
            const filters = JSON.parse(saved);
            productSearch.value = filters.search || '';
            categoryFilter.value = filters.category || '';
            priceSort.value = filters.sort || '';
            filterProducts();
        }
    } catch (e) {
        console.error('Failed to load filters:', e);
    }
}

// Initialize Products
function initProducts() {
    if (productSearch) {
        productSearch.addEventListener('input', () => { filterProducts(); saveFilters(); });
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => { filterProducts(); saveFilters(); });
    }
    if (priceSort) {
        priceSort.addEventListener('change', () => { filterProducts(); saveFilters(); });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProducts);
    }
    loadFilters();
    renderProducts();
}
