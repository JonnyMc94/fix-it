// import 'dotenv';
import crypto from 'crypto';
import sequelize from '../sequelize.ts'; 
import { UserModel, ProductsModel, ManualModel, FixesModel, UserSavedItemsModel, UserSearchesModel } from '../models/index.ts';
import { users, products, manuals, fixes, userSavedItems, userSearches } from './data/index.ts';

async function run() {
  try {
    console.log('Connecting to DB...');
    await sequelize.authenticate();
    console.log('Connected.');

    // Dev-only: force recreate all tables
    console.log('Syncing DB (force: true) — this will drop existing tables in dev!');
    await sequelize.sync({ force: true });

    console.log('Inserting users...');
    await UserModel.bulkCreate(users as any);

    console.log('Inserting products...');
    await ProductsModel.bulkCreate(products as any);

    console.log('Inserting manuals...');
    await ManualModel.bulkCreate(manuals as any);

    console.log('Inserting fixes...');
    await FixesModel.bulkCreate(fixes as any);

    console.log('Inserting saved items...');
    await UserSavedItemsModel.bulkCreate(userSavedItems as any);

    console.log('Inserting user searches...');
    await UserSearchesModel.bulkCreate(userSearches as any);

    console.log('Seed complete ✅');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

run();
