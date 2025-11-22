import sequelize from '../sequelize.ts';
import { ManualModel, ProductsModel, UserSavedItemsModel, UserSearchesModel, UserModel, FixesModel  } from '../models/index.ts';

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('Connected. Seeding data...');

    await UserModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Jonathan',
        email: 'jon@example.com',
        password_hash: 'hashed123'
      }
    ]);

    await ProductsModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Dyson Vacuum',
        brand: 'Dyson',
        model_number: 'DX100',
        category: 'Appliances',
        image_url: 'https://example.com/dyson.png'
      }
    ]);

    await ManualModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Dyson Vacuum',
        brand: 'Dyson',
        model_number: 'DX100',
        category: 'Appliances',
        image_url: 'https://example.com/dyson.png'
      }
    ]);

    await UserSavedItemsModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Dyson Vacuum',
        brand: 'Dyson',
        model_number: 'DX100',
        category: 'Appliances',
        image_url: 'https://example.com/dyson.png'
      }
    ]);

    await UserSearchesModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Dyson Vacuum',
        brand: 'Dyson',
        model_number: 'DX100',
        category: 'Appliances',
        image_url: 'https://example.com/dyson.png'
      }
    ]);

    await FixesModel.bulkCreate([
      {
        id: crypto.randomUUID(),
        name: 'Dyson Vacuum',
        brand: 'Dyson',
        model_number: 'DX100',
        category: 'Appliances',
        image_url: 'https://example.com/dyson.png'
      }
    ]);

    console.log('Seed complete!');
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
