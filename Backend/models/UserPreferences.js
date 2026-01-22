const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  // Notification Preferences
  emailNotifications: {
    type: Boolean,
    default: true
  },
  smsNotifications: {
    type: Boolean,
    default: false
  },
  pushNotifications: {
    type: Boolean,
    default: true
  },
  orderUpdates: {
    type: Boolean,
    default: true
  },
  promotions: {
    type: Boolean,
    default: true
  },
  newsletter: {
    type: Boolean,
    default: false
  },
  
  // Display Preferences
  language: {
    type: String,
    enum: ['en', 'ur', 'ar'],
    default: 'en'
  },
  currency: {
    type: String,
    enum: ['USD', 'PKR', 'EUR', 'GBP'],
    default: 'USD'
  },
  theme: {
    type: String,
    enum: ['light', 'dark', 'auto'],
    default: 'auto'
  },
  
  // Order Preferences
  defaultOrderType: {
    type: String,
    enum: ['delivery', 'pickup'],
    default: 'delivery'
  },
  defaultPaymentMethod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentMethod'
  },
  defaultTipPercentage: {
    type: Number,
    default: 10,
    min: 0,
    max: 30
  },
  
  // Dietary Preferences
  dietaryRestrictions: [{
    type: String,
    enum: ['vegetarian', 'vegan', 'gluten_free', 'dairy_free', 'halal', 'kosher', 'nut_allergy']
  }],
  spiceLevel: {
    type: String,
    enum: ['mild', 'medium', 'hot', 'extra_hot'],
    default: 'medium'
  },
  
  // Privacy Preferences
  shareOrderHistory: {
    type: Boolean,
    default: false
  },
  allowLocationTracking: {
    type: Boolean,
    default: true
  },
  marketingOptIn: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserPreferences', userPreferencesSchema);
