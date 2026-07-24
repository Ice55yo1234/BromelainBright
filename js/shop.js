/* ============================================
   BROMELAIN BRIGHT — Shop & Products
   ============================================ */

// ---- Product Data Store ----
const PRODUCTS = [
  {
    id: 'sachet',
    name: 'Bromelain Bright Facial Mask',
    subtitle: 'Trial Sachet',
    category: 'Facial Mask',
    price: 290,
    currency: '฿',
    size: '25 ml × 5 Sachets',
    image: 'assets/images/product-sachet.png',
    images: ['assets/images/product-sachet.png'],
    rating: 4.8,
    reviews: 142,
    stock: 128,
    sold: 1240,
    badges: ['Best Seller', 'Eco Friendly'],
    shortDesc: 'Single-use sachet perfect for first-time users and travelers.',
    description: 'Experience the power of Bromelain Enzyme in our convenient single-use sachets. Each sachet contains 25ml of our signature facial mask formula, enriched with upcycled pineapple core extract. Perfect for weekly skincare routines or on-the-go pampering.',
    benefits: [
      'Brightens dull skin',
      'Deep hydration in 15 minutes',
      'Helps reduce acne marks',
      'Smooth and soft skin texture',
      'Rich in Bromelain Enzyme',
      'Antioxidant protection',
      'Gentle for sensitive skin',
      'Single-use hygienic packaging'
    ],
    ingredients: [
      { name: 'Bromelain Enzyme', pct: 15 },
      { name: 'Pineapple Core Extract', pct: 20 },
      { name: 'Hyaluronic Acid', pct: 5 },
      { name: 'Vitamin B3 (Niacinamide)', pct: 4 },
      { name: 'Centella Asiatica', pct: 3 },
      { name: 'Vitamin E', pct: 2 },
      { name: 'Natural Botanical Extracts', pct: 10 }
    ],
    howToUse: [
      'Cleanse face thoroughly',
      'Open sachet and apply evenly',
      'Leave on for 15-20 minutes',
      'Rinse with lukewarm water',
      'Follow with moisturizer'
    ],
    skinTypes: ['Normal', 'Dry', 'Combination', 'Sensitive'],
    warnings: 'For external use only. Avoid contact with eyes. Discontinue if irritation occurs. Patch test recommended for sensitive skin.',
    storage: 'Store in a cool, dry place away from direct sunlight. Best used within 12 months.',
    mfg: 'Made in Thailand | GMP Certified | Dermatologically Tested',
    labels: ['Eco Friendly', 'Cruelty Free', 'Vegan', 'Dermatologically Tested', 'Made in Thailand']
  },
  {
    id: 'jar',
    name: 'Bromelain Bright Facial Mask',
    subtitle: 'Luxury Jar',
    category: 'Facial Mask',
    price: 890,
    currency: '฿',
    size: '100 g (~20 Applications)',
    image: 'assets/images/product-jar.png',
    images: ['assets/images/product-jar.png'],
    rating: 4.9,
    reviews: 287,
    stock: 64,
    sold: 2180,
    badges: ['Best Seller', 'Eco Friendly', 'Organic'],
    shortDesc: 'Premium reusable jar for your regular home skincare ritual.',
    description: 'Our flagship product in a luxurious, eco-friendly jar. The Bromelain Bright Facial Mask Jar provides approximately 20 applications of our concentrated pineapple enzyme formula. The premium glass container is fully reusable and recyclable.',
    benefits: [
      'Brightens dull skin visibly',
      'Deep hydration lasting 24 hours',
      'Reduces acne marks and dark spots',
      'Improves skin texture and elasticity',
      'Supports natural skin barrier',
      'Rich in Bromelain Enzyme',
      'Antioxidant & anti-inflammatory',
      'Premium eco-friendly packaging'
    ],
    ingredients: [
      { name: 'Bromelain Enzyme', pct: 20 },
      { name: 'Pineapple Core Extract', pct: 25 },
      { name: 'Hyaluronic Acid', pct: 5 },
      { name: 'Vitamin B3 (Niacinamide)', pct: 5 },
      { name: 'Centella Asiatica', pct: 4 },
      { name: 'Vitamin E', pct: 3 },
      { name: 'Natural Botanical Extracts', pct: 12 }
    ],
    howToUse: [
      'Cleanse face thoroughly',
      'Using the spatula, apply a thin layer',
      'Leave on for 15-20 minutes',
      'Rinse with lukewarm water',
      'Use 2-3 times per week for best results'
    ],
    skinTypes: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'],
    warnings: 'For external use only. Avoid contact with eyes. Keep jar sealed after use. Discontinue if irritation occurs.',
    storage: 'Store below 25°C in a dry place. Keep lid tightly closed. Use within 6 months of opening.',
    mfg: 'Made in Thailand | GMP Certified | Dermatologically Tested | Organic Certified',
    labels: ['Best Seller', 'Eco Friendly', 'Organic', 'Cruelty Free', 'Vegan', 'Research Based', 'Made in Thailand']
  },
  {
    id: 'essence',
    name: 'Bromelain Bright Essence',
    subtitle: 'Concentrated Serum',
    category: 'Essence',
    price: 1290,
    currency: '฿',
    size: '30 ml',
    image: 'assets/images/product-essence.png',
    images: ['assets/images/product-essence.png'],
    rating: 4.9,
    reviews: 198,
    stock: 42,
    sold: 1650,
    badges: ['New', 'Limited Edition', 'Research Based'],
    shortDesc: 'Concentrated daily serum for intensive brightening and nourishment.',
    description: 'Our most advanced formulation yet. The Bromelain Bright Essence delivers a concentrated dose of Bromelain Enzyme directly to your skin with our proprietary dropper system. Fast-absorbing and lightweight, this daily serum targets dullness, uneven tone, and dehydration.',
    benefits: [
      'Concentrated brightening formula',
      'Fast absorption technology',
      'Deep moisturizing for 48 hours',
      'Reduces fine lines and wrinkles',
      'Evens skin tone visibly',
      'Strengthens skin barrier',
      'Antioxidant shield protection',
      'Suitable for all skin types'
    ],
    ingredients: [
      { name: 'Concentrated Bromelain', pct: 25 },
      { name: 'Pineapple Core Extract', pct: 15 },
      { name: 'Hyaluronic Acid', pct: 8 },
      { name: 'Vitamin B3 (Niacinamide)', pct: 6 },
      { name: 'Centella Asiatica', pct: 5 },
      { name: 'Vitamin E', pct: 3 },
      { name: 'Peptide Complex', pct: 4 }
    ],
    howToUse: [
      'After cleansing and toning',
      'Dispense 3-4 drops onto fingertips',
      'Gently pat onto face and neck',
      'Allow to absorb for 30 seconds',
      'Follow with moisturizer or mask',
      'Use morning and evening daily'
    ],
    skinTypes: ['All Skin Types'],
    warnings: 'For external use only. Avoid contact with eyes. If irritation occurs, reduce frequency of use.',
    storage: 'Store in a cool, dark place. Keep dropper sealed. Use within 3 months of opening.',
    mfg: 'Made in Thailand | GMP Certified | Dermatologically Tested | Clinical Grade',
    labels: ['New', 'Limited Edition', 'Research Based', 'Cruelty Free', 'Vegan', 'Made in Thailand']
  },
  {
    id: 'cleanser',
    name: 'Bromelain Bright Powder Cleanser',
    subtitle: 'Water-Activated Powder Cleanser',
    category: 'Cleanser',
    price: 590,
    currency: '฿',
    size: '50 g (Waterless Formula)',
    image: 'assets/images/product-cleanser.png',
    images: ['assets/images/product-cleanser.png'],
    rating: 4.9,
    reviews: 86,
    stock: 75,
    sold: 890,
    badges: ['Innovative', 'Waterless', 'Zero Waste'],
    shortDesc: 'Micro-exfoliating enzyme powder activated by water. Zero preservative, eco-travel ready.',
    description: 'A revolutionary waterless cleanser formulation. Micro-fine powder infused with active Bromelain Enzyme and Rice Powder transforms into a velvety exfoliating lather when mixed with a few drops of water. Effectively dissolves dead skin cells and clogged pores without harsh micro-beads.',
    benefits: [
      'Activated instantly with water',
      'Gentle enzymatic micro-exfoliation',
      'Zero liquid weight for easy travel',
      'Preservative-free 100% stable formula',
      'Deeply cleanses clogged pores',
      'Leaves skin silky smooth instantly'
    ],
    ingredients: [
      { name: 'Pure Bromelain Powder', pct: 30 },
      { name: 'Organic Rice Starch Powder', pct: 40 },
      { name: 'Pineapple Fiber Extract', pct: 15 },
      { name: 'Papain Enzyme', pct: 10 },
      { name: 'Sodium Lauroyl Glutamate', pct: 5 }
    ],
    howToUse: [
      'Pour half a teaspoon of powder onto wet palm',
      'Add a few drops of water to create a rich lather',
      'Gently massage onto face in circular motions for 30s',
      'Rinse thoroughly with warm water'
    ],
    skinTypes: ['All Skin Types', 'Sensitive', 'Acne-prone'],
    warnings: 'Keep bottle dry. Do not allow water inside bottle.',
    storage: 'Store in a cool dry place. Close cap tightly.',
    mfg: 'Made in Thailand | Waterless Innovation | GMP Certified',
    labels: ['Innovative', 'Waterless', 'Eco Friendly', 'Cruelty Free', 'Vegan']
  },
  {
    id: 'lip',
    name: 'Bromelain Bright Lip Renewal Mask',
    subtitle: 'Overnight Lip Sleeping Mask',
    category: 'Lip Care',
    price: 390,
    currency: '฿',
    size: '15 g (Glass Pot)',
    image: 'assets/images/product-lip.png',
    images: ['assets/images/product-lip.png'],
    rating: 4.9,
    reviews: 112,
    stock: 90,
    sold: 1420,
    badges: ['Best Seller', 'Natural', 'Organic'],
    shortDesc: 'Gentle lip exfoliating and ultra-hydrating overnight sleeping mask.',
    description: 'Transform dark, dry, and chapped lips while you sleep. Formulated with ultra-gentle micro-dosed Bromelain Enzyme to smooth flaky skin on lips, combined with organic Coconut Oil and Shea Butter for 12-hour deep nourishment.',
    benefits: [
      'Gently dissolves flaky dead skin on lips',
      'Visibly reduces dark lip pigmentation',
      'Locks in intense moisture for 12 hours',
      'Plumps lips naturally overnight',
      '100% edible natural botanical ingredients'
    ],
    ingredients: [
      { name: 'Micro-Dosed Bromelain', pct: 5 },
      { name: 'Organic Cold-Pressed Coconut Oil', pct: 35 },
      { name: 'Unrefined Shea Butter', pct: 30 },
      { name: 'Thai Honey Extract', pct: 20 },
      { name: 'Vitamin E & Pineapple Aroma', pct: 10 }
    ],
    howToUse: [
      'Apply a generous layer onto lips before bed',
      'Leave on overnight',
      'Wipe away residue gently in the morning'
    ],
    skinTypes: ['Dry Lips', 'Chapped Lips', 'All Skin Types'],
    warnings: 'For external use only.',
    storage: 'Store away from direct heat and sunlight.',
    mfg: 'Made in Thailand | Organic Ingredients | Cruelty Free',
    labels: ['Natural', 'Organic', 'Cruelty Free', 'Edible Grade']
  }
];

// ---- Cart Operations ----
function getCart() {
  return JSON.parse(localStorage.getItem('bb_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('bb_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id: productId, qty: Math.min(qty, product.stock) });
  }

  saveCart(cart);
  showToast(`✨ ${product.subtitle} added to cart!`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (item && product) {
    item.qty = Math.max(1, Math.min(qty, product.stock));
  }
  saveCart(cart);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

// ---- Render Product Cards ----
function renderProductCards(container, products = PRODUCTS) {
  if (!container) return;
  container.innerHTML = products.map(p => `
    <div class="product-card" data-aos="fade-up">
      <div class="product-card-image">
        <a href="product-${p.id}.html">
          <img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
        </a>
        <div class="product-card-badges">
          ${p.badges.slice(0, 2).map(b => `<span class="badge badge-${b === 'Best Seller' ? 'best' : b === 'New' ? 'new' : b === 'Limited Edition' ? 'limited' : b === 'Organic' ? 'organic' : 'eco'}">${b}</span>`).join('')}
        </div>
        <div class="product-card-actions">
          <button onclick="toggleWishlist('${p.id}')" data-wishlist="${p.id}" title="Add to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button onclick="addToCart('${p.id}')" title="Quick Add">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${p.category}</div>
        <h3 class="product-card-title">${p.subtitle}</h3>
        <p class="product-card-desc">${p.shortDesc}</p>
        <div class="product-card-footer">
          <span class="product-card-price">${p.currency}${p.price.toLocaleString()}</span>
          <div class="product-card-rating">
            ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''}
            <span style="color:var(--gray-400);margin-left:4px">(${p.reviews})</span>
          </div>
        </div>
        <div class="product-card-stock${p.stock < 10 ? ' low' : ''}">
          ${p.stock < 10 ? `Only ${p.stock} left!` : `In Stock (${p.stock})`}
        </div>
      </div>
    </div>
  `).join('');
}

// ---- Filter & Sort (Shop page) ----
function initShop() {
  const grid = document.querySelector('.shop-grid');
  const searchInput = document.querySelector('.shop-search');
  const categoryBtns = document.querySelectorAll('.shop-category');
  const sortSelect = document.querySelector('.shop-sort');

  if (!grid) return;

  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'popular';

  function filterAndRender() {
    let filtered = [...PRODUCTS];

    // Category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === currentCategory);
    }

    // Search
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (currentSort) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'popular': filtered.sort((a, b) => b.sold - a.sold); break;
    }

    renderProductCards(grid, filtered);
    updateWishlistUI();
  }

  // Category buttons
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      filterAndRender();
    });
  });

  // Search
  searchInput?.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterAndRender();
  });

  // Sort
  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterAndRender();
  });

  // Initial render
  filterAndRender();
}

// ---- Render Cart Page ----
function renderCartPage() {
  const cartContainer = document.querySelector('.cart-items');
  const cartSummary = document.querySelector('.cart-summary');
  const emptyMsg = document.querySelector('.cart-empty');

  if (!cartContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (cartSummary) cartSummary.innerHTML = '';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';

  cartContainer.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item card" style="display:flex;gap:var(--space-xl);padding:var(--space-lg);margin-bottom:var(--space-md);align-items:center;">
        <div style="width:100px;height:100px;background:var(--beige);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:2.5rem;flex-shrink:0;">
          ${p.id === 'sachet' ? '🍍' : p.id === 'jar' ? '✨' : '💧'}
        </div>
        <div style="flex:1;">
          <h4 style="font-size:var(--fs-base);margin-bottom:4px;">${p.name}</h4>
          <p style="font-size:var(--fs-sm);color:var(--gray-400);">${p.subtitle} — ${p.size}</p>
        </div>
        <div class="qty-selector">
          <button onclick="updateCartQty('${p.id}', ${item.qty - 1}); renderCartPage();">−</button>
          <input type="text" value="${item.qty}" readonly>
          <button onclick="updateCartQty('${p.id}', ${item.qty + 1}); renderCartPage();">+</button>
        </div>
        <div style="min-width:100px;text-align:right;">
          <div style="font-family:var(--font-display);font-weight:700;color:var(--forest);">${p.currency}${(p.price * item.qty).toLocaleString()}</div>
          <div style="font-size:var(--fs-xs);color:var(--gray-400);">${p.currency}${p.price.toLocaleString()} each</div>
        </div>
        <button onclick="removeFromCart('${p.id}'); renderCartPage(); showToast('Item removed');" style="color:var(--gray-400);font-size:1.2rem;" title="Remove">✕</button>
      </div>
    `;
  }).join('');

  if (cartSummary) {
    const subtotal = getCartTotal();
    const shipping = subtotal > 1000 ? 0 : 50;
    const total = subtotal + shipping;
    cartSummary.innerHTML = `
      <div class="card" style="padding:var(--space-xl);">
        <h3 style="margin-bottom:var(--space-lg);">Order Summary</h3>
        <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-sm);font-size:var(--fs-sm);color:var(--gray-500);">
          <span>Subtotal</span><span>฿${subtotal.toLocaleString()}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-sm);font-size:var(--fs-sm);color:var(--gray-500);">
          <span>Shipping</span><span>${shipping === 0 ? 'Free' : '฿' + shipping}</span>
        </div>
        ${shipping === 0 ? '<div style="font-size:var(--fs-xs);color:var(--sage);margin-bottom:var(--space-sm);">🎉 Free shipping on orders over ฿1,000</div>' : ''}
        <hr style="border:none;border-top:1px solid var(--gray-200);margin:var(--space-md) 0;">
        <div style="display:flex;justify-content:space-between;font-family:var(--font-display);font-size:var(--fs-xl);font-weight:700;color:var(--forest);">
          <span>Total</span><span>฿${total.toLocaleString()}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--space-xl);">Proceed to Checkout</a>
        <a href="shop.html" style="display:block;text-align:center;margin-top:var(--space-md);font-size:var(--fs-sm);color:var(--sage);">Continue Shopping →</a>
      </div>
    `;
  }
}

// ---- Quantity Selector on Product Pages ----
function initQuantitySelector() {
  document.querySelectorAll('.qty-selector').forEach(sel => {
    const input = sel.querySelector('input');
    const minusBtn = sel.querySelector('.qty-minus');
    const plusBtn = sel.querySelector('.qty-plus');
    const max = parseInt(sel.dataset.max || '99');

    minusBtn?.addEventListener('click', () => {
      const v = parseInt(input.value) || 1;
      input.value = Math.max(1, v - 1);
    });

    plusBtn?.addEventListener('click', () => {
      const v = parseInt(input.value) || 1;
      input.value = Math.min(max, v + 1);
    });
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initShop();
  renderCartPage();
  initQuantitySelector();
});
