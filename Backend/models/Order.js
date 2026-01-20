const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    notes: { type: String }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: { type: [orderItemSchema], required: true },
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'cooking', 'ready', 'delivered'],
      default: 'pending'
    },
    type: { type: String, enum: ['delivery', 'pickup'], required: true },
    paymentMethod: { type: String, required: true },
    shippingAddress: { type: String },
    contactNumber: { type: String },
    isUrgent: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
