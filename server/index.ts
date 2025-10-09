import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// --------------------
// Environment Variables
// --------------------
const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME || 'fixitdb';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASS = process.env.DB_PASS || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';

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
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
});

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.error('❌ Database connection failed:', err));

// --------------------
// Routes
// --------------------
app.get('/', (req: Request, res: Response) => {
  res.send('FixIt server is running!');
});

// Example route structure
// app.use('/auth', require('./routes/auth'));  // add your auth routes
// app.use('/fixes', require('./routes/fixes')); // add your fixes routes

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
