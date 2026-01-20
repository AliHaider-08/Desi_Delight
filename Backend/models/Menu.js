const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
    spiceLevel: { type: Number, min: 0, max: 3, default: 0 },
    tags: [{ type: String }],
    inStock: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Menu', menuSchema);
