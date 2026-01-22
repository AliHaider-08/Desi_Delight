const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');

const recreateAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/desi-delight');
    console.log('Connected to MongoDB');

    // Delete existing admin user
    await User.deleteOne({ email: 'admin@desidelight.com' });
    console.log('Deleted existing admin user');

    // Create new admin user with correct password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const adminUser = new User({
      fullName: 'Admin User',
      email: 'admin@desidelight.com',
      password: 'admin123', // Will be hashed by pre-save middleware
      role: 'admin',
      phone: '+92 300 0000000',
      address: 'Restaurant Office, Karachi'
    });

    await adminUser.save();
    console.log('New admin user created successfully!');
    
    // Test the login
    const testUser = await User.findOne({ email: 'admin@desidelight.com' });
    const isMatch = await testUser.matchPassword('admin123');
    console.log('Password test (admin123):', isMatch ? 'SUCCESS' : 'FAILED');
    
    console.log('Admin credentials:');
    console.log('Email: admin@desidelight.com');
    console.log('Password: admin123');
    console.log('Role: admin');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

recreateAdminUser();
