const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    image: { type: String },
    notes: { type: String }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderNumber: { type: String, required: true, unique: true },
    items: { type: [orderItemSchema], required: true },
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'cooking', 'ready', 'delivered', 'cancelled'],
      default: 'pending'
    },
    type: { type: String, enum: ['delivery', 'pickup'], required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    shippingAddress: { type: String },
    deliveryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address'
    },
    contactNumber: { type: String },
    isUrgent: { type: Boolean, default: false },
    specialInstructions: { type: String, trim: true },
    estimatedDeliveryTime: { type: Date },
    actualDeliveryTime: { type: Date }
  },
  { timestamps: true }
);

// Generate order number before saving
orderSchema.pre('save', async function(next) {
  if (!this.orderNumber) {
    const count = await this.constructor.countDocuments();
    this.orderNumber = `SR-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
