import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { validateEnv } from './utils/envValidate.ts';
// import { User } from './models/user';
// import { Message } from './models/message';
// import { Conversations } from './models/conversations';

dotenv.config({ path: '.env.local' });
validateEnv()

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  // models: [User, Message, Conversations],
});

console.log('Sequelize instance initialized with models:', sequelize.models);

export default sequelize;