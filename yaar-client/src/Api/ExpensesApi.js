import axios from 'axios';

const BaseUrl = 'http://localhost:3005/api';

export const addExpense = async (expenseData) => {
    try {
        const response = await axios.post(`${BaseUrl}/expenses`, expenseData);
        return response.data;
    } catch (error) {
        console.log("error in addExpense", error); 
        throw error;
    }
}

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/expenses`);
        return response.data;
    } catch (error) {
        console.log("Error in getExpenses:", error); 
        throw error;
    }
};

export const deleteExpense = async (expenseId) => {
    try {
        const response = await axios.delete(`${BaseUrl}/expenses/${expenseId}`);
        return response.data;
    } catch (error) {
        console.log("Error in deleteExpense:", error); 
        throw error;
    }
}
