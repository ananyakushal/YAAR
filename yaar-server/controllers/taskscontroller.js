const Task = require('../models/tasksmodel');

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.status(200).json({ tasks });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }
const getAllTasks = async (req, res) => {
    try {
        const { id: userID } = req.params;
        const tasks = await Task.find({id: userID}).sort({date: -1, time: -1});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
} 

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask
}