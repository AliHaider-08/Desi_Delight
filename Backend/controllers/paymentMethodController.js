const PaymentMethod = require('../models/PaymentMethod');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get user payment methods
// @route   GET /api/payment-methods
// @access  Private
const getPaymentMethods = asyncHandler(async (req, res) => {
  const paymentMethods = await PaymentMethod.find({ 
    user: req.user.id, 
    isActive: true 
  }).sort({ isDefault: -1, createdAt: -1 });
  res.json(paymentMethods);
});

// @desc    Create payment method
// @route   POST /api/payment-methods
// @access  Private
const createPaymentMethod = asyncHandler(async (req, res) => {
  const { type, cardType, lastFour, expiryMonth, expiryYear, cardholderName, paypalEmail, isDefault } = req.body;

  const paymentMethod = await PaymentMethod.create({
    user: req.user.id,
    type,
    cardType,
    lastFour,
    expiryMonth,
    expiryYear,
    cardholderName,
    paypalEmail,
    isDefault
  });

  res.status(201).json(paymentMethod);
});

// @desc    Update payment method
// @route   PUT /api/payment-methods/:id
// @access  Private
const updatePaymentMethod = asyncHandler(async (req, res) => {
  const { type, cardType, lastFour, expiryMonth, expiryYear, cardholderName, paypalEmail, isDefault, isActive } = req.body;

  let paymentMethod = await PaymentMethod.findById(req.params.id);

  if (!paymentMethod) {
    return res.status(404).json({ message: 'Payment method not found' });
  }

  // Check if payment method belongs to user
  if (paymentMethod.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  paymentMethod = await PaymentMethod.findByIdAndUpdate(
    req.params.id,
    { type, cardType, lastFour, expiryMonth, expiryYear, cardholderName, paypalEmail, isDefault, isActive },
    { new: true, runValidators: true }
  );

  res.json(paymentMethod);
});

// @desc    Delete payment method
// @route   DELETE /api/payment-methods/:id
// @access  Private
const deletePaymentMethod = asyncHandler(async (req, res) => {
  const paymentMethod = await PaymentMethod.findById(req.params.id);

  if (!paymentMethod) {
    return res.status(404).json({ message: 'Payment method not found' });
  }

  // Check if payment method belongs to user
  if (paymentMethod.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  // Soft delete by setting isActive to false
  paymentMethod.isActive = false;
  await paymentMethod.save();

  res.json({ message: 'Payment method removed' });
});

// @desc    Set default payment method
// @route   PUT /api/payment-methods/:id/default
// @access  Private
const setDefaultPaymentMethod = asyncHandler(async (req, res) => {
  const paymentMethod = await PaymentMethod.findById(req.params.id);

  if (!paymentMethod) {
    return res.status(404).json({ message: 'Payment method not found' });
  }

  // Check if payment method belongs to user
  if (paymentMethod.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  // Unset all default payment methods for this user
  await PaymentMethod.updateMany(
    { user: req.user.id, _id: { $ne: this._id } },
    { isDefault: false }
  );

  // Set this payment method as default
  paymentMethod.isDefault = true;
  await paymentMethod.save();

  res.json(paymentMethod);
});

module.exports = {
  getPaymentMethods,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  setDefaultPaymentMethod
};
