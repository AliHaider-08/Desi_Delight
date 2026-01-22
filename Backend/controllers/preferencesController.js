const UserPreferences = require('../models/UserPreferences');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get user preferences
// @route   GET /api/preferences
// @access  Private
const getPreferences = asyncHandler(async (req, res) => {
  let preferences = await UserPreferences.findOne({ user: req.user.id });
  
  // Create default preferences if none exist
  if (!preferences) {
    preferences = await UserPreferences.create({ user: req.user.id });
  }
  
  res.json(preferences);
});

// @desc    Update user preferences
// @route   PUT /api/preferences
// @access  Private
const updatePreferences = asyncHandler(async (req, res) => {
  const {
    emailNotifications,
    smsNotifications,
    pushNotifications,
    orderUpdates,
    promotions,
    newsletter,
    language,
    currency,
    theme,
    defaultOrderType,
    defaultTipPercentage,
    dietaryRestrictions,
    spiceLevel,
    shareOrderHistory,
    allowLocationTracking,
    marketingOptIn
  } = req.body;

  let preferences = await UserPreferences.findOne({ user: req.user.id });
  
  if (!preferences) {
    preferences = await UserPreferences.create({
      user: req.user.id,
      emailNotifications,
      smsNotifications,
      pushNotifications,
      orderUpdates,
      promotions,
      newsletter,
      language,
      currency,
      theme,
      defaultOrderType,
      defaultTipPercentage,
      dietaryRestrictions,
      spiceLevel,
      shareOrderHistory,
      allowLocationTracking,
      marketingOptIn
    });
  } else {
    preferences = await UserPreferences.findOneAndUpdate(
      { user: req.user.id },
      {
        emailNotifications,
        smsNotifications,
        pushNotifications,
        orderUpdates,
        promotions,
        newsletter,
        language,
        currency,
        theme,
        defaultOrderType,
        defaultTipPercentage,
        dietaryRestrictions,
        spiceLevel,
        shareOrderHistory,
        allowLocationTracking,
        marketingOptIn
      },
      { new: true, runValidators: true }
    );
  }

  res.json(preferences);
});

// @desc    Reset preferences to defaults
// @route   POST /api/preferences/reset
// @access  Private
const resetPreferences = asyncHandler(async (req, res) => {
  await UserPreferences.deleteOne({ user: req.user.id });
  
  const preferences = await UserPreferences.create({ user: req.user.id });
  
  res.json(preferences);
});

module.exports = {
  getPreferences,
  updatePreferences,
  resetPreferences
};
