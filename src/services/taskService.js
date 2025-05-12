
const taskRepository = require('../repositories/taskRepository');
const mongoose = require('mongoose');
const AppError = require('../utils/appError');

const createTask = async (taskData) => {
  return await taskRepository.createTask(taskData);
};

const getTaskById = async (taskId) => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    throw new AppError('Invalid task ID', 400);
  }
  return await taskRepository.findTaskById(taskId);
};

const getAllTasksByUserId = async (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new AppError('Invalid user ID', 400);
  }
  return await taskRepository.findTasksByUserId(userId);
};
const getAllTasks = async () => {
  return await taskRepository.findAllTasks();
};

const updateTask = async (taskId, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    throw new AppError('Invalid task ID', 400);
  }
  return await taskRepository.updateTaskById(taskId, updateData);
};

const deleteTask = async (taskId) => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    throw new AppError('Invalid task ID', 400);
  }
  return await taskRepository.deleteTaskById(taskId);
};

module.exports = {
  createTask,
  getTaskById,
  getAllTasksByUserId,
  getAllTasks,
  updateTask,
  deleteTask
};
