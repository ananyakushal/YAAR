import axios from 'axios';

const BaseUrl = 'http://localhost:3005/api';

export const addTask = async (Data) => {
    try {
        const response = await axios.post(`${BaseUrl}/tasks`, Data);
        return response.data;
    } catch (error) {
        console.log("error in addExpense", error); 
        throw error;
    }
}


export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${BaseUrl}/tasks/${taskId}`);
        return response.data;
    } catch (error) {
        console.log("Error in deletetask:", error); 
        throw error;
    }
}

export const userSortedTask = async (userId) => {
    try {
        const response = await axios.get(`${BaseUrl}/tasks/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error in userSortedtasks:", error); 
        throw error;
    }
}