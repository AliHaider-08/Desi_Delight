const express = require('express');
const {
  getPreferences,
  updatePreferences,
  resetPreferences
} = require('../controllers/preferencesController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getPreferences)
  .put(protect, updatePreferences);

router.post('/reset', protect, resetPreferences);

module.exports = router;
