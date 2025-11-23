import crypto from 'crypto';
import { users } from './users.ts';
import { products } from './products.ts';

export const userSearches = [
  {
    id: crypto.randomUUID(),
    user_id: users[0]?.id,
    query_text: 'Dyson V10 not powering on',
    image_url: null,
    identified_product_id: products[0]?.id
  },
  {
    id: crypto.randomUUID(),
    user_id: users[1]?.id,
    query_text: 'Washer makes loud noise',
    image_url: null,
    identified_product_id: products[1]?.id
  },
  {
    id: crypto.randomUUID(),
    user_id: users[2]?.id,
    query_text: 'Canon Pixma prints faded',
    image_url: null,
    identified_product_id: products[2]?.id
  }
];
