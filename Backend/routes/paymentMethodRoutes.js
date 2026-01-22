const express = require('express');
const {
  getPaymentMethods,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  setDefaultPaymentMethod
} = require('../controllers/paymentMethodController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getPaymentMethods)
  .post(protect, createPaymentMethod);

router.route('/:id')
  .put(protect, updatePaymentMethod)
  .delete(protect, deletePaymentMethod);

router.put('/:id/default', protect, setDefaultPaymentMethod);

module.exports = router;
