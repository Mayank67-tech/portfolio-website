require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const existing = await Admin.findOne({ email: 'admin@portfolio.com' });
    if (existing) {
      console.log('Admin already exists. Skipping seed.');
      process.exit(0);
      return;
    }
    await Admin.create({
      name: 'Mayank Kumar Agarwal',
      email: 'admin@portfolio.com',
      password: 'Admin@123',
      role: 'admin',
    });
    console.log('Admin seeded successfully. Email: admin@portfolio.com, Password: Admin@123');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seedAdmin();
