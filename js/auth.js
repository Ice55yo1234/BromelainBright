/* ============================================
   BROMELAIN BRIGHT — Auth (Demo)
   ============================================ */

// ---- Demo User Store ----
function getUsers() {
  const users = JSON.parse(localStorage.getItem('bb_users') || 'null');
  if (!users || users.length === 0) {
    const defaultUsers = [
      { name: 'Demo User', email: 'demo@bromelainbright.com', password: 'password123', joined: new Date().toISOString() }
    ];
    localStorage.setItem('bb_users', JSON.stringify(defaultUsers));
    return defaultUsers;
  }
  return users;
}

function saveUsers(users) {
  localStorage.setItem('bb_users', JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('bb_current_user') || 'null');
}

function setCurrentUser(user) {
  localStorage.setItem('bb_current_user', JSON.stringify(user));
}

// ---- Quick Demo Fill ----
function fillDemoUser() {
  const emailInput = document.querySelector('#login-form [name="email"]');
  const passInput = document.querySelector('#login-form [name="password"]');
  if (emailInput && passInput) {
    emailInput.value = 'demo@bromelainbright.com';
    passInput.value = 'password123';
    showToast('✨ Demo credentials filled!');
  }
}

// ---- Login ----
function initLogin() {
  const form = document.querySelector('#login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('[name="email"]')?.value;
    const password = form.querySelector('[name="password"]')?.value;

    if (!email || !password) {
      showToast('Please fill in all fields.');
      return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setCurrentUser(user);
      showToast('✨ Welcome back, ' + user.name + '!');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    } else {
      // Demo: auto-login for new users
      const demoUser = { name: email.split('@')[0], email, password, joined: new Date().toISOString() };
      users.push(demoUser);
      saveUsers(users);
      setCurrentUser(demoUser);
      showToast('✨ Welcome! (Demo login)');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    }
  });
}

// ---- Register ----
function initRegister() {
  const form = document.querySelector('#register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value;
    const email = form.querySelector('[name="email"]')?.value;
    const password = form.querySelector('[name="password"]')?.value;
    const confirm = form.querySelector('[name="confirm"]')?.value;

    if (!name || !email || !password || !confirm) {
      showToast('Please fill in all fields.');
      return;
    }

    if (password !== confirm) {
      showToast('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters.');
      return;
    }

    const users = getUsers();
    if (users.find(u => u.email === email)) {
      showToast('Email already registered.');
      return;
    }

    const newUser = { name, email, password, joined: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);
    showToast('✨ Account created successfully!');
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
  });
}

// ---- Dashboard ----
function initDashboard() {
  const user = getCurrentUser();
  if (!user) {
    if (window.location.pathname.endsWith('dashboard.html')) {
      window.location.href = 'login.html';
    }
    return;
  }

  // Populate user info
  const initialEl = document.querySelector('.dash-user-initial');
  const nameEl = document.querySelector('.dash-user-name');
  const emailEl = document.querySelector('.dash-user-email');
  const joinedEl = document.querySelector('.dash-user-joined');

  if (initialEl) initialEl.textContent = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  if (nameEl) nameEl.textContent = user.name;
  if (emailEl) emailEl.textContent = user.email;
  if (joinedEl) joinedEl.textContent = 'Member since ' + new Date(user.joined).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  // Wishlist
  const wishlist = JSON.parse(localStorage.getItem('bb_wishlist') || '[]');
  const wishlistContainer = document.querySelector('.dash-wishlist');
  if (wishlistContainer && typeof PRODUCTS !== 'undefined') {
    const wishProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
    if (wishProducts.length === 0) {
      wishlistContainer.innerHTML = '<p style="color:var(--gray-400);text-align:center;padding:var(--space-xl);">No items in wishlist yet.</p>';
    } else {
      wishlistContainer.innerHTML = wishProducts.map(p => `
        <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);border-bottom:1px solid var(--gray-200);">
          <div style="width:50px;height:50px;background:var(--beige);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:1.5rem;">
            ${p.id === 'sachet' ? '🍍' : p.id === 'jar' ? '✨' : '💧'}
          </div>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:var(--fs-sm);">${p.subtitle}</div>
            <div style="font-size:var(--fs-xs);color:var(--gray-400);">${p.currency}${p.price.toLocaleString()}</div>
          </div>
          <a href="product-${p.id}.html" class="btn btn-sm btn-secondary">View</a>
        </div>
      `).join('');
    }
  }

  // Order history (demo)
  const ordersContainer = document.querySelector('.dash-orders');
  if (ordersContainer) {
    ordersContainer.innerHTML = `
      <div style="text-align:center;padding:var(--space-2xl);color:var(--gray-400);">
        <div style="font-size:3rem;margin-bottom:var(--space-md);">📦</div>
        <p>No orders yet. <a href="shop.html" style="color:var(--sage);">Start shopping →</a></p>
      </div>
    `;
  }
}

// ---- Logout ----
function logout() {
  localStorage.removeItem('bb_current_user');
  showToast('Logged out successfully.');
  setTimeout(() => window.location.href = 'index.html', 500);
}

// ---- Auth Nav Update ----
function updateAuthNav() {
  const user = getCurrentUser();
  const loginLinks = document.querySelectorAll('.auth-login-link');
  const dashLinks = document.querySelectorAll('.auth-dash-link');

  loginLinks.forEach(el => el.style.display = user ? 'none' : '');
  dashLinks.forEach(el => el.style.display = user ? '' : 'none');
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initLogin();
  initRegister();
  initDashboard();
  updateAuthNav();
});
