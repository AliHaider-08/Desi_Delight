const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    occasion: { type: String },
    specialRequests: { type: String },
    tablePreference: { type: String },
    seatingArea: { type: String },
    dietaryRestrictions: [{ type: String }],
    celebrationDetails: {
      name: { type: String },
      message: { type: String }
    },
    status: { type: String, default: 'pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);
