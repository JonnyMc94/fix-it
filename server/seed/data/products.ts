import crypto from 'crypto';

export const products = [
  {
    id: crypto.randomUUID(),
    name: 'Dyson V10 Vacuum',
    brand: 'Dyson',
    model_number: 'V10-AB123',
    category: 'Appliance',
    image_url: 'https://example.com/dyson-v10.jpg'
  },
  {
    id: crypto.randomUUID(),
    name: 'Samsung Washer 3000',
    brand: 'Samsung',
    model_number: 'SW-3000',
    category: 'Appliance',
    image_url: 'https://example.com/samsung-washer.jpg'
  },
  {
    id: crypto.randomUUID(),
    name: 'Canon Pixma G7020 Printer',
    brand: 'Canon',
    model_number: 'G7020',
    category: 'Electronics',
    image_url: 'https://example.com/canon-g7020.jpg'
  },
  {
    id: crypto.randomUUID(),
    name: 'iPhone 12',
    brand: 'Apple',
    model_number: 'A2172',
    category: 'Electronics',
    image_url: 'https://example.com/iphone12.jpg'
  }
];
