const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError'); // You'll create this next
const userService = require('../services/authService');

exports.register = catchAsync(async (req, res, next) => {
  const user = await userService.register(req.body);
  res.status(201).json({ message: 'User created', user });
});

exports.login = catchAsync(async (req, res, next) => {
  const { token, user } = await userService.login(req.body);
  res.status(200).json({ message: 'Login successful', token, user });
});

exports.logout = (req, res) => {
  // If using cookies: res.clearCookie('jwt');
  res.status(200).json({ message: 'Logout successful' });
};