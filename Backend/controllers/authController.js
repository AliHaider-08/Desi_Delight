const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

// Configure multer for profile picture uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads/profiles');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + req.user.id + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone, address } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'fullName, email and password are required' });
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ fullName, email, password, phone, address });
  const token = signToken(user._id);

  res.status(201).json({
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address
    }
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signToken(user._id);

  res.json({
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address
    }
  });
});

const profile = asyncHandler(async (req, res) => {
  res.json({ user: req.user });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { fullName, email, phone, address } = req.body;
  
  const user = await User.findById(req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check if email is being changed and if it's already taken
  if (email && email !== user.email) {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    user.email = email.toLowerCase();
  }

  // Update other fields
  if (fullName) user.fullName = fullName;
  if (phone) user.phone = phone;
  if (address) user.address = address;

  const updatedUser = await user.save();

  res.json({
    message: 'Profile updated successfully',
    user: {
      id: updatedUser._id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      role: updatedUser.role,
      phone: updatedUser.phone,
      address: updatedUser.address,
      profilePicture: updatedUser.profilePicture,
      createdAt: updatedUser.createdAt
    }
  });
});

const uploadProfilePicture = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const user = await User.findById(req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Delete old profile picture if exists
  if (user.profilePicture) {
    const oldPicturePath = path.join(__dirname, '../uploads/profiles', path.basename(user.profilePicture));
    if (fs.existsSync(oldPicturePath)) {
      fs.unlinkSync(oldPicturePath);
    }
  }

  // Update user profile picture path
  const profilePictureUrl = `/uploads/profiles/${req.file.filename}`;
  user.profilePicture = profilePictureUrl;
  
  await user.save();

  res.json({
    message: 'Profile picture uploaded successfully',
    profilePicture: profilePictureUrl,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address,
      profilePicture: user.profilePicture,
      createdAt: user.createdAt
    }
  });
});

module.exports = { register, login, profile, updateProfile, uploadProfilePicture, upload };
