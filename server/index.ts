import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sequelize from './sequelize.ts';
import dotenv from 'dotenv';

// --------------------
// Environment Variables
// --------------------
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

// --------------------
// Initialize Express
// --------------------
const app = express();

dotenv.config()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// --------------------
// Initialize Sequelize
// --------------------
// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.error('❌ Database connection failed:', err));

sequelize.sync()
  .then(() => console.log('✅ Database synchronized'))
  .catch(err => console.error('❌ Database synchronization failed:', err));

console.log('Sequelize instance initialized with models:', sequelize.models);


// --------------------
// Routes
// --------------------
import productsRouter from './routes/products.ts';

app.get('/', (req: Request, res: Response) => {
  res.send('FixIt server is running!');
});

app.use('/products', productsRouter);

// --------------------
// Global Error Handler
// --------------------
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// --------------------
// Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
