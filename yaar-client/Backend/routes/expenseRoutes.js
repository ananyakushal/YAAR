const express = require('express');
const router = express.Router();


const {getAllExpenses, getOneExpense, createExpense, updateExpense, deleteExpense} = require('../controllers/expensescontroller');

// Get all expenses
router.get('/', getAllExpenses);

// Get one expense
router.get('/:id', getOneExpense);

// Create expense
router.post('/', createExpense);

// Update expense
router.patch('/:id', updateExpense); 

// Delete expense
router.delete('/:id', deleteExpense);

module.exports = router;

