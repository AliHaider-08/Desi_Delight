const express = require('express');

const {
  createReservation,
  getAllReservations
} = require('../controllers/reservationController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', createReservation);
router.get('/', protect, admin, getAllReservations);

module.exports = router;
