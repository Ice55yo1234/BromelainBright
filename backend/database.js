import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('data.json');

const defaultData = {
  users: [
    { id: 1, name: 'Demo User', email: 'demo@bromelainbright.com', password: 'password123', joined: new Date().toISOString() }
  ],
  products: [
    { id: 'sachet', name: 'Bromelain Bright Facial Mask Sachet', price: 290, stock: 128 },
    { id: 'jar', name: 'Bromelain Bright Facial Mask Jar', price: 890, stock: 64 },
    { id: 'essence', name: 'Bromelain Bright Essence', price: 1290, stock: 42 }
  ],
  orders: [],
  contacts: []
};

export function getDb() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return defaultData;
  }
}

export function saveDb(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
