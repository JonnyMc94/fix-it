import crypto from 'crypto';

export const users = [
  {
    id: crypto.randomUUID(),
    name: 'Jonathan McNamee',
    email: 'jonathan@example.com',
    password_hash: 'password-hash-1'
  },
  {
    id: crypto.randomUUID(),
    name: 'Ava Smith',
    email: 'ava@example.com',
    password_hash: 'password-hash-2'
  },
  {
    id: crypto.randomUUID(),
    name: 'Liam Chen',
    email: 'liam@example.com',
    password_hash: 'password-hash-3'
  }
];
