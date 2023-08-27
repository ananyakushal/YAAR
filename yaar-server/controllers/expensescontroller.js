const Expense = require('../models/expensemodel');


const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).json({ expenses });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Get one expense
const getOneExpense = async (req, res) => {
    try {
        const { id: expenseID } = req.params;
        const expense = await Expense.findOne({ _id: expenseID });
        if (!expense) {
            return res.status(404).json({ msg: `No expense with id: ${expenseID}` });
        }
        res.status(200).json({ expense });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Create expense
const createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(201).json({ expense });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Update expense
const updateExpense = async (req, res) => {
    try {
        const { id: expenseID } = req.params;
        const expense = await Expense.findOneAndUpdate({ _id: expenseID }, req.body, { new: true, runValidators: true });
        if (!expense) {
            return res.status(404).json({ msg: `No expense with id: ${expenseID}` });
        }
        res.status(200).json({ expense });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Delete expense
const deleteExpense = async (req, res) => {
    try {
        const { id: expenseID } = req.params;
        const expense = await Expense.findOneAndDelete({ _id: expenseID });
        if (!expense) {
            return res.status(404).json({ msg: `No expense with id: ${expenseID}` });
        }
        res.status(200).json({ expense });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Get sorted expenses

const sortedExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({}).sort({date: -1, time: -1});
        res.status(200).json({ expenses });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}



module.exports = {
    getAllExpenses,
    getOneExpense,
    createExpense,
    updateExpense,
    sortedExpenses,
    deleteExpense
}

