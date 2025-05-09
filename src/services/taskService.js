
const taskRepository = require('../repositories/taskRepository');

const createTask = async (taskData) => {
  return await taskRepository.createTask(taskData);
};

const getTaskById = async (taskId) => {
  return await taskRepository.findTaskById(taskId);
};

const getAllTasks = async () => {
  return await taskRepository.findAllTasks();
};

const updateTask = async (taskId, updateData) => {
  return await taskRepository.updateTaskById(taskId, updateData);
};

const deleteTask = async (taskId) => {
  return await taskRepository.deleteTaskById(taskId);
};

module.exports = {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask
};
