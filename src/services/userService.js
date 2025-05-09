const userRepository = require('../repositories/userRepository');
const mongoose = require('mongoose');
const AppError = require('../utils/appError');

const fetchUsers = async () => {
  return await userRepository.findAll();
};

const getUserById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid user ID', 400);
  }
  const user = await userRepository.findById(id);
  if (!user) {
    throw new AppError('No user found', 404);
  }
  return user;
};

const updateUserById = async (id, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid user ID', 400);
  }

  const updatedUser = await userRepository.updateById(id, updateData);
  if (!updatedUser) {
    throw new AppError('User not found', 404);
  }
  
  return updatedUser;
};

const deleteUserById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid user ID', 400);
  }

  const deletedUser = await userRepository.deleteById(id);
  if (!deletedUser) {
    throw new AppError('User not found', 404);
  }

  return deletedUser;
};

module.exports = {
  fetchUsers,
  getUserById,
  updateUserById,
  deleteUserById
}