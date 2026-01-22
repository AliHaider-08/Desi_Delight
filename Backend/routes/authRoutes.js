const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { register, login, profile, updateProfile, uploadProfilePicture, upload } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, profile);
router.put('/profile', protect, updateProfile);
router.post('/upload-profile-picture', protect, upload.single('profilePicture'), uploadProfilePicture);

module.exports = router;
