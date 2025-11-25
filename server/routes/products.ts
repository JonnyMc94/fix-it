import { Router } from 'express';
import { ProductsController } from '../controllers/productsController.ts'

const router = Router();

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProductById);

export default router;

