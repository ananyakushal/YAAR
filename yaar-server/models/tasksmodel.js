const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    time: {
        type: String,
        required: [true, 'must provide date'],
    }, 
    date:{
        type: String,
        required: [true, 'must provide time'],
    },
    label:{
        type: String,
        required: [true, 'must provide label'],
        enum: ["Work","Daily","Urgent","Events", "Reminders"],
    },
    id:{
        type: String,
        required: [true, 'must provide id'],
    },
    description:{
        type: String,
        required: [true, 'must provide description'],
    },
});

module.exports = mongoose.model('Task', TaskSchema);