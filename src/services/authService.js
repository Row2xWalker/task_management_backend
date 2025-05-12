const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  });

const register = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new AppError('Email already in use', 400);

  const user = await User.create({ name, email, password });
  return { id: user._id, name: user.name, email: user.email };
};

const login = async ({ email, password }, res) => {
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = signToken(user._id);

  // Set the token in an HTTP-only cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 1000,
  });

  return {
    token,
    user: { id: user._id, name: user.name, email: user.email },
  };
};

module.exports = {
  register,
  login
}