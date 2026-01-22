const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');

const checkAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/desi-delight');
    console.log('Connected to MongoDB');

    // Check admin user
    const adminUser = await User.findOne({ email: 'admin@desidelight.com' });
    
    if (adminUser) {
      console.log('Admin user found:');
      console.log('Email:', adminUser.email);
      console.log('Full Name:', adminUser.fullName);
      console.log('Role:', adminUser.role);
      console.log('ID:', adminUser._id);
      
      // Test password match
      const isMatch = await adminUser.matchPassword('admin123');
      console.log('Password match (admin123):', isMatch);
    } else {
      console.log('Admin user not found');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

checkAdminUser();
