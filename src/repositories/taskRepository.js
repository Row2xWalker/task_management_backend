const Task = require('../models/taskModel')

const createTask = async (taskData) => {
  return await Task.create(taskData);
};

const findTaskById = async (taskId) => {
  return await Task.findById(taskId);
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
  findAllTasks,
  updateTaskById,
  deleteTaskById,
};