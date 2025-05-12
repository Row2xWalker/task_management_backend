const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const userService = require('../services/authService');

const register = catchAsync(async (req, res, next) => {
  const user = await userService.register(req.body);
  res.status(201).json({ message: 'User created', user });
});

const login = catchAsync(async (req, res, next) => {
  const { token, user } = await userService.login(req.body, res);
  res.status(200).json({ message: 'Login successful', token, user });
});

const logout = (req, res) => {
  if (!req.cookies.token) {
    return res.status(400).json({ message: 'You are not logged in' });
  }

  // Clear the cookie
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
  });

  res.status(200).json({ message: 'Logged out successfully' });
};

const me = catchAsync(async (req, res) => {
  res.json({ user: req.user });
});

module.exports = {
  register,
  login,
  logout,
  me
}