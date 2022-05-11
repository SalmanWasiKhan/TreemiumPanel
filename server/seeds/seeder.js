const connectDB = require('../utils/connectDB');
const adminSeeder = require('./admin.seed');
const dotenv = require('dotenv');

dotenv.config();

const seeder = async () => {
  connectDB();

  await adminSeeder();

  process.exit();
};

seeder();
