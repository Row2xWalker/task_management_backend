const catchAsync = require('../utils/catchAsync');
const taskService = require('../services/taskService');

const getAllTasks = catchAsync(async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
});

const getTaskById = catchAsync(async (req, res) => {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
});

const getAllTasksByUserId = catchAsync(async (req, res) => {
    const { userId } = req.params
    const tasks = await taskService.getAllTasksByUserId(userId);
    if (!tasks) return res.status(404).json({ error: 'No tasks for specific user' });
    res.json(tasks);
});

const createNewTask = catchAsync(async (req, res) => {
    const taskData = {
        ...req.body,
        user: req.user.id,
    }
    const task = await taskService.createTask(taskData);
    res.status(201).json(task);
});

const updateTaskById = catchAsync(async (req, res) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
});

const deleteTaskById = catchAsync(async (req, res) => {
    const user = await taskService.deleteTask(req.params.id);
    if (!user) return res.status(404).json({ error: 'Task not found' });
    res.json(user);
});


module.exports = {
    getAllTasks,
    getTaskById,
    getAllTasksByUserId,
    createNewTask,
    updateTaskById,
    deleteTaskById
}