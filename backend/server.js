import express from 'express';
import cors from 'cors';
import { getDb, saveDb } from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bromelain Bright API Server Running' });
});

// Products API
app.get('/api/products', (req, res) => {
  const db = getDb();
  res.json({ success: true, products: db.products });
});

// Login API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const db = getDb();
  const user = db.users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Register API
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const db = getDb();

  if (db.users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'Email already registered' });
  }

  const newUser = {
    id: db.users.length + 1,
    name,
    email,
    password,
    joined: new Date().toISOString()
  };

  db.users.push(newUser);
  saveDb(db);

  res.json({ success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
});

// Contact API
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const db = getDb();

  const newContact = {
    id: db.contacts.length + 1,
    name,
    email,
    subject,
    message,
    date: new Date().toISOString()
  };

  db.contacts.push(newContact);
  saveDb(db);

  res.json({ success: true, message: 'Contact message received successfully' });
});

// Orders API
app.post('/api/orders', (req, res) => {
  const { items, shipping, total, paymentMethod } = req.body;
  const db = getDb();

  const newOrder = {
    id: 'BB-ORDER-' + Math.floor(100000 + Math.random() * 900000),
    items,
    shipping,
    total,
    paymentMethod,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  db.orders.push(newOrder);
  saveDb(db);

  res.json({ success: true, order: newOrder });
});

app.listen(PORT, () => {
  console.log(`✨ Bromelain Bright API Server listening on http://localhost:${PORT}`);
});
