import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { validateEnv } from './utils/envValidate.ts';
import { ManualModel, ProductsModel, UserSavedItemsModel, UserSearchesModel, UserModel, FixesModel } from './models/index.ts'

dotenv.config({ path: '.env.local' });
validateEnv()

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  models: [ ManualModel, ProductsModel, UserSavedItemsModel, UserSearchesModel, UserModel, FixesModel ],
});

export default sequelize;