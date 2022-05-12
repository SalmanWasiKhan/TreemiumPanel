const User = require('../models/user.model');

const user = {
  name: 'Admin',
  email: 'admin@gmail.com',
  password: '12345678',
  role: 'admin',
};

const categorySeeder = async () => {
  try {
    // check if admin user exists
    await User.findOneAndDelete({ role: 'admin' });

    // create admin user
    const newUser = new User(user);
    await newUser.save();

    console.log('Admin Seeder: Admin created');
  } catch (error) {
    console.log(error);
  }
};

module.exports = categorySeeder;
