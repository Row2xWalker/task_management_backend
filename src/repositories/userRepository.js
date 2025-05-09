const User = require('../models/userModel');

const create = async (userData) => {
  return await User.create(userData);
};

const findAll = async () => {
  return await User.find({});
};

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const findById = async (id) => {
  return await User.findById(id);
};

const updateById = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteById = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  create,
  findAll,
  findByEmail,
  findById,
  updateById,
  deleteById,
};