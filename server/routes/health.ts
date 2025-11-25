import { Router } from 'express';
import type { Request, Response } from 'express';
import sequelize from '../sequelize.ts';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connection healthy');
    res.status(200).json({ status: 'ok', db: 'connected' });
  } catch (error) {
    console.error('DB health check failed:', error);
    res.status(500).json({ status: 'error', db: 'disconnected' });
  }
});

export default router;