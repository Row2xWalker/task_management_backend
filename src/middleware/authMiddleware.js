const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

const protect = async (req, res, next) => {
  let token;

  // Get token from cookie
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return next(new AppError('User no longer exists', 401));

    req.user = user;
    next();
  } catch (err) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

module.exports = { protect };