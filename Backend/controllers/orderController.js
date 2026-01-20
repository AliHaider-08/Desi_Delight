const Order = require('../models/Order');
const asyncHandler = require('../middleware/asyncHandler');

const placeOrder = asyncHandler(async (req, res) => {
  const {
    items,
    totalAmount,
    type,
    paymentMethod,
    shippingAddress,
    contactNumber,
    isUrgent
  } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Order items are required' });
  }

  if (!type || !paymentMethod) {
    return res.status(400).json({ message: 'type and paymentMethod are required' });
  }

  const computedTotal = items.reduce(
    (sum, it) => sum + Number(it.price || 0) * Number(it.quantity || 0),
    0
  );

  const order = await Order.create({
    user: req.user._id,
    items,
    totalAmount: typeof totalAmount === 'number' ? totalAmount : computedTotal,
    type,
    paymentMethod,
    shippingAddress,
    contactNumber,
    isUrgent
  });

  res.status(201).json(order);
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate('user', 'fullName email')
    .sort({ createdAt: -1 });
  res.json(orders);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ message: 'status is required' });
  }

  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  order.status = status;
  await order.save();

  res.json(order);
});

module.exports = { placeOrder, getMyOrders, getAllOrders, updateOrderStatus };
