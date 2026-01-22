const Reservation = require('../models/Reservation');
const asyncHandler = require('../middleware/asyncHandler');

const createReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.status(201).json(reservation);
});

const getAllReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find().sort({ createdAt: -1 });
  res.json(reservations);
});

module.exports = { createReservation, getAllReservations };
