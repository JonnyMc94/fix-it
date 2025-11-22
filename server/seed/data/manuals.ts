import crypto from 'crypto';
import { products } from './products.ts';

export const manuals = [
  {
    id: crypto.randomUUID(),
    product_id: products[0]?.id,
    title: 'Dyson V10 Owner Manual',
    file_url: 'https://example.com/dyson-v10-manual.pdf',
    source_url: 'https://dyson.example/manuals/v10'
  },
  {
    id: crypto.randomUUID(),
    product_id: products[0]?.id,
    title: 'Dyson V10 Maintenance Guide',
    file_url: 'https://example.com/dyson-v10-maintenance.pdf',
    source_url: 'https://dyson.example/maintenance/v10'
  },
  {
    id: crypto.randomUUID(),
    product_id: products[1]?.id,
    title: 'Samsung Washer 3000 Manual',
    file_url: 'https://example.com/samsung-washer-manual.pdf',
    source_url: 'https://samsung.example/manuals/sw3000'
  },
  {
    id: crypto.randomUUID(),
    product_id: products[2]?.id,
    title: 'Canon Pixma Setup and Troubleshooting',
    file_url: 'https://example.com/canon-g7020-manual.pdf',
    source_url: 'https://canon.example/support/g7020'
  }
];
