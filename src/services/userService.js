const userRepository = require('../repositories/userRepository');

exports.fetchUsers = async () => {
  return await userRepository.findAll();
};

exports.getUserById = async (id) => {
  return await userRepository.findById(id);
};