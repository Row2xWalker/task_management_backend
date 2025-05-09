const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const userService = require('../services/authService');

const register = catchAsync(async (req, res, next) => {
  const user = await userService.register(req.body);
  res.status(201).json({ message: 'User created', user });
});

const login = catchAsync(async (req, res, next) => {
  const { token, user } = await userService.login(req.body);
  res.status(200).json({ message: 'Login successful', token, user });
});

const logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
  register,
  login,
  logout
}