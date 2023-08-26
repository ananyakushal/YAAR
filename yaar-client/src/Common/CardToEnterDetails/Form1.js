// Form1.jsx
import React, { useState } from "react";

import { addExpense } from '../../Api/ExpensesApi.js';

import "./Card.css";
const Form1 = () => {
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionData = {
      type: transactionType,
      amount: parseFloat(amount),
      date,
      time,
      category
    };

    try {
      await addExpense(transactionData);
      setAmount("");
      setDate("");
      setTime("");
      setCategory("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };



  return (
      <form onSubmit={handleSubmit}>
        <div className="radio-inputs">
          <label className="radio">
            <input
              type="radio"
              value="expense"
              checked={transactionType === "expense"}
              onChange={handleTransactionTypeChange}
            />
            <span className="name">Expense</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              value="income"
              checked={transactionType === "income"}
              onChange={handleTransactionTypeChange}
            />
            <span className="name">Income</span>
          </label>
        </div>
        <div className="textInputWrapper">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            className="textInput"
          />
        </div>
        <div className="textInputWrapper">
          <label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Date"
              className="textInput"
            />
          </label>
        </div>
        <div className="textInputWrapper">
          <label>
            <input
              type="time"
              value={time}
              placeholder="Time"
              onChange={handleTimeChange}
              className="textInput"
            />
          </label>
        </div>
        <div className="textInputWrapper">
          <label>
            <select
              placeholder="Category"
              value={category}
              onChange={handleCategoryChange}
              className="textInput"
            >
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="groceries">Groceries</option>
              <option value="clothing">Clothing</option>
              <option value="medical">Medical</option>
              <option value="party">Party</option>
              <option value="transportation">Transportation</option>
            </select>
          </label>
        </div>
        <div className="submitButtonWrapper btn rounded-xl h-8 w-16 text-sm p-1 m-2 sm:text-lg uppercase sm:h-10 sm:w-20 bg-green-500 hover:bg-green-600 mx-auto">
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
      </form>

  );
};

export default Form1;
