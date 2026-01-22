const Address = require('../models/Address');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get user addresses
// @route   GET /api/addresses
// @access  Private
const getAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find({ user: req.user.id }).sort({ isDefault: -1, createdAt: -1 });
  res.json(addresses);
});

// @desc    Create address
// @route   POST /api/addresses
// @access  Private
const createAddress = asyncHandler(async (req, res) => {
  const { type, name, street, city, state, zipCode, country, phone, isDefault } = req.body;

  const address = await Address.create({
    user: req.user.id,
    type,
    name,
    street,
    city,
    state,
    zipCode,
    country: country || 'Pakistan',
    phone,
    isDefault
  });

  res.status(201).json(address);
});

// @desc    Update address
// @route   PUT /api/addresses/:id
// @access  Private
const updateAddress = asyncHandler(async (req, res) => {
  const { type, name, street, city, state, zipCode, country, phone, isDefault } = req.body;

  let address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }

  // Check if address belongs to user
  if (address.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  address = await Address.findByIdAndUpdate(
    req.params.id,
    { type, name, street, city, state, zipCode, country, phone, isDefault },
    { new: true, runValidators: true }
  );

  res.json(address);
});

// @desc    Delete address
// @route   DELETE /api/addresses/:id
// @access  Private
const deleteAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }

  // Check if address belongs to user
  if (address.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  await address.remove();
  res.json({ message: 'Address removed' });
});

// @desc    Set default address
// @route   PUT /api/addresses/:id/default
// @access  Private
const setDefaultAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }

  // Check if address belongs to user
  if (address.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  // Unset all default addresses of this type for this user
  await Address.updateMany(
    { user: req.user.id, type: address.type },
    { isDefault: false }
  );

  // Set this address as default
  address.isDefault = true;
  await address.save();

  res.json(address);
});

module.exports = {
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress
};
