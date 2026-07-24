/* ============================================
   BROMELAIN BRIGHT — Main App
   ============================================ */

// ---- Navigation ----
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu?.classList.toggle('active');
    document.body.style.overflow = mobileMenu?.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileMenu?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// ---- Search Overlay ----
function initSearch() {
  const searchBtn = document.querySelector('.search-btn');
  const overlay = document.querySelector('.search-overlay');
  const closeBtn = overlay?.querySelector('.search-overlay-close');
  const input = overlay?.querySelector('.search-overlay-input');

  searchBtn?.addEventListener('click', () => {
    overlay?.classList.add('active');
    setTimeout(() => input?.focus(), 300);
  });

  closeBtn?.addEventListener('click', () => {
    overlay?.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay?.classList.remove('active');
  });
}

// ---- Cart Badge ----
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('bb_cart') || '[]');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

// ---- Toast Notifications ----
function showToast(message, duration = 3000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ---- Newsletter ----
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input?.value && input.value.includes('@')) {
        showToast('✨ Thank you for subscribing!');
        input.value = '';
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  });
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✨ Message sent successfully! We\'ll get back to you soon.');
    form.reset();
  });
}

// ---- Accordion / FAQ ----
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Close all in same group
      item.parentElement?.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.accordion-content').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// ---- Tabs ----
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.tab');
    const panels = tabGroup.parentElement?.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        panels?.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(target)?.classList.add('active');
      });
    });
  });
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ---- Loading Screen ----
function initLoadingScreen() {
  const screen = document.querySelector('.loading-screen');
  if (!screen) return;

  const hideScreen = () => {
    screen.classList.add('hidden');
    setTimeout(() => { screen.style.display = 'none'; }, 500);
  };

  if (document.readyState === 'complete') {
    hideScreen();
  } else {
    window.addEventListener('load', hideScreen, { once: true });
    setTimeout(hideScreen, 600); // Safety fallback
  }
}

// ---- Modal ----
function openModal(id) {
  document.getElementById(id)?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
  document.body.style.overflow = '';
}

// ---- Wishlist ----
function toggleWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('bb_wishlist') || '[]');
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('❤️ Added to wishlist!');
  }
  localStorage.setItem('bb_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  const wishlist = JSON.parse(localStorage.getItem('bb_wishlist') || '[]');
  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    const id = btn.dataset.wishlist;
    btn.classList.toggle('active', wishlist.includes(id));
    const svg = btn.querySelector('svg');
    if (svg) svg.style.fill = wishlist.includes(id) ? '#DC3545' : 'none';
  });
}

// ---- Init All ----
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSearch();
  initNewsletter();
  initContactForm();
  initAccordions();
  initTabs();
  initSmoothScroll();
  initLoadingScreen();
  updateCartBadge();
  updateWishlistUI();
});
