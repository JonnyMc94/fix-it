import type { Request, Response } from 'express';
import { ProductsService } from '../services/productsService.ts'

export class ProductsController {
    static async getAllProducts (req: Request, res: Response) {
        try {
            const products = await ProductsService.findAll(req.query);
            res.json({ success: true, data: products });
        } catch (error) {
            console.error('Error retrieving products:', error);
            res.status(500).json({ success: false, message: 'Error retrieving products' });
        }
    }
    static async getProductById (req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json({ success: false, message: 'Product ID is required' });
            }
            
            const product = await ProductsService.findById(id);
            
            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
            
            res.json({ success: true, data: product });
        } catch (error) {
            console.error('Error retrieving product:', error);
            res.status(500).json({ success: false, message: 'Error retrieving product' });
        }
    }
}