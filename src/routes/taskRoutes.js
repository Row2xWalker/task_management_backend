const express = require('express');
const { getAllTasks, getTaskById, createNewTask, updateTaskById, deleteTaskById } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createNewTask);
router.patch('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;