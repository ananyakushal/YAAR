import axios from 'axios';

const BaseUrl = 'http://localhost:3005/api';
// const userId = localStorage.getItem('userId');

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

export const deleteEntry = async (expenseId) => {
    try {
        const response = await axios.delete(`${BaseUrl}/expenses/${expenseId}`);
        return response.data;
    } catch (error) {
        console.log("Error in deleteExpense:", error); 
        throw error;
    }
}

export const sortedExpenses = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/expenses/sort`);
        return response.data;
    } catch (error) {
        console.log("Error in sortedExpenses:", error); 
        throw error;
    }
}

export const userSortedExpenses = async (userId) => {
    try {
        const response = await axios.get(`${BaseUrl}/expenses/user/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error in userSortedExpenses:", error); 
        throw error;
    }
}