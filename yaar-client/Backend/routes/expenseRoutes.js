const express = require('express');
const router = express.Router();


const {getAllExpenses, getOneExpense, createExpense, updateExpense, deleteExpense, sortedExpenses} = require('../controllers/expensescontroller');

// Get all expenses
router.get('/', getAllExpenses);

//get sorted expenses
router.get('/sort', sortedExpenses);

// Get one expense
router.get('/:id', getOneExpense);

// Create expense
router.post('/', createExpense);

// Update expense
router.patch('/:id', updateExpense); 

// Delete expense
router.delete('/:id', deleteExpense);

module.exports = router;

