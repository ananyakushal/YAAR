const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'must provide cost'],
        min: [0, 'cost cannot be less than 0']
    },
    time: {
        type: String,
        required: [true, 'must provide date'],
    }, 
    date:{
        type: String,
        required: [true, 'must provide time'],
    },
    category: {
       type: String,
       required: [true, 'must provide category'],
       enum: ['Food', 'Transportation', 'Clothing','Medical', 'Party', 'Groceries',"Salary","Pocket Money","Cashback"]
    },
    type:{
        type: String,
        required: [true, 'must provide type'],
    },
    id:{
        type: String,
        required: [true, 'must provide id'],
    },
}); 

module.exports = mongoose.model('Expense', ExpenseSchema);