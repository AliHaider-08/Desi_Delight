const Menu = require('../models/Menu');
const asyncHandler = require('../middleware/asyncHandler');

const getMenuItems = asyncHandler(async (req, res) => {
  const items = await Menu.find().sort({ createdAt: -1 });
  res.json(items);
});

const createMenuItem = asyncHandler(async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json(item);
});

const updateMenuItem = asyncHandler(async (req, res) => {
  const updated = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!updated) {
    return res.status(404).json({ message: 'Menu item not found' });
  }

  res.json(updated);
});

const deleteMenuItem = asyncHandler(async (req, res) => {
  const deleted = await Menu.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Menu item not found' });
  }

  res.json({ message: 'Menu item deleted' });
});

module.exports = { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };
