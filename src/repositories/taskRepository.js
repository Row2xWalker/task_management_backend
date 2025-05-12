const Task = require('../models/taskModel')

const createTask = async (taskData) => {
  return await Task.create(taskData);
};

const findTaskById = async (taskId) => {
  return await Task.findById(taskId);
};

const findTasksByUserId = async (user) => {
  console.log(user)
  return await Task.find({ user })
};
const findAllTasks = async () => {
  return await Task.find({});
};

const updateTaskById = async (taskId, updateData) => {
  return await Task.findByIdAndUpdate(taskId, updateData, { new: true });
};

const deleteTaskById = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

module.exports = {
  createTask,
  findTaskById,
  findTasksByUserId,
  findAllTasks,
  updateTaskById,
  deleteTaskById,
};