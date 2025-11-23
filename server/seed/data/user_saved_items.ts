import crypto from 'crypto';
import { users } from './users.ts';
import { manuals } from './manuals.ts';
import { fixes } from './fixes.ts';

export const userSavedItems = [
  // user 0 saves a manual
  {
    id: crypto.randomUUID(),
    user_id: users[0]?.id,
    manual_id: manuals[0]?.id,
    fix_id: null
  },
  // user 1 saves a fix
  {
    id: crypto.randomUUID(),
    user_id: users[1]?.id,
    manual_id: null,
    fix_id: fixes[2]?.id
  },
  // user 2 saves multiple things
  {
    id: crypto.randomUUID(),
    user_id: users[2]?.id,
    manual_id: manuals[2]?.id,
    fix_id: null
  },
  {
    id: crypto.randomUUID(),
    user_id: users[2]?.id,
    manual_id: null,
    fix_id: fixes[0]?.id
  }
];
