const express = require('express');
const { getAllTasks, getTaskById, getAllTasksByUserId, createNewTask, updateTaskById, deleteTaskById } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.get('/users/:userId', getAllTasksByUserId);
router.post('/', createNewTask);
router.patch('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;