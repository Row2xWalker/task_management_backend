const express = require('express');
const { getAllUsers, getUserById, updateUserById, deleteUserById} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;