const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['credit_card', 'debit_card', 'paypal', 'cash_on_delivery'],
    required: true
  },
  cardType: {
    type: String,
    enum: ['visa', 'mastercard', 'amex', 'discover', 'maestro', 'unionpay'],
    required: function() {
      return ['credit_card', 'debit_card'].includes(this.type);
    }
  },
  lastFour: {
    type: String,
    required: function() {
      return ['credit_card', 'debit_card'].includes(this.type);
    },
    validate: {
      validator: function(v) {
        return v.length === 4;
      },
      message: 'Last four digits must be exactly 4 characters'
    }
  },
  expiryMonth: {
    type: String,
    required: function() {
      return ['credit_card', 'debit_card'].includes(this.type);
    },
    validate: {
      validator: function(v) {
        return v.length === 2 && parseInt(v) >= 1 && parseInt(v) <= 12;
      },
      message: 'Expiry month must be between 01 and 12'
    }
  },
  expiryYear: {
    type: String,
    required: function() {
      return ['credit_card', 'debit_card'].includes(this.type);
    },
    validate: {
      validator: function(v) {
        return v.length === 4 && parseInt(v) >= new Date().getFullYear();
      },
      message: 'Expiry year must be current year or later'
    }
  },
  cardholderName: {
    type: String,
    required: function() {
      return ['credit_card', 'debit_card'].includes(this.type);
    },
    trim: true
  },
  paypalEmail: {
    type: String,
    required: function() {
      return this.type === 'paypal';
    },
    lowercase: true,
    trim: true
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Ensure only one default payment method per user
paymentMethodSchema.pre('save', async function(next) {
  if (this.isDefault) {
    await this.constructor.updateMany(
      { user: this.user, _id: { $ne: this._id } },
      { isDefault: false }
    );
  }
  next();
});

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);
