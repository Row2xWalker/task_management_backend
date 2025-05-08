const catchAsync = require('../utils/catchAsync');
const userService = require('../services/userService')

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.fetchUsers();
    res.json(users);
});

exports.getUserById = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});