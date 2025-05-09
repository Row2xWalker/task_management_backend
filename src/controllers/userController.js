const catchAsync = require('../utils/catchAsync');
const userService = require('../services/userService')

const getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.fetchUsers();
    res.json(users);
});

const getUserById = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

const updateUserById = catchAsync(async (req, res) => {
    const user = await userService.updateUserById(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

const deleteUserById = catchAsync(async (req, res) => {
    const user = await userService.deleteUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}