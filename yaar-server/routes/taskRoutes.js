const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, deleteTask } = require('../controllers/taskscontroller');

// Get all tasks
router.get('/', getAllTasks);

// Create a task
router.post('/', createTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router; 
