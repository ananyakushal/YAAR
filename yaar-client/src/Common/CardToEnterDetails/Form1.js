/* eslint-disable no-lone-blocks */
// Form1.jsx
import React, { useState } from "react";

import { addExpense } from "../../Api/ExpensesApi.js";

import "./Card.css";
const Form1 = () => {
  let dateValue = new Date();
  let day = dateValue.getDate();
  let month = dateValue.getMonth() + 1;
  let year = dateValue.getFullYear();
  let minute = dateValue.getMinutes();
  let hour = dateValue.getHours();

  const expenseCategory = [
    "Food",
    "Groceries",
    "Clothing",
    "Medical",
    "Party",
    "Transportation",
  ];
  const incomeCategory = ["Salary","Pocket Money","Cashback"];


  {
    day < 10 && (day = "0" + day);
  }
  {
    month < 10 && (month = "0" + month);
  }
  {
    minute < 10 && (minute = "0" + minute);
  }
  {
    hour < 10 && (hour = "0" + hour);
  }

  const [transactionType, setTransactionType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(year + "-" + month + "-" + day);
  const [time, setTime] = useState(hour + ":" + minute);
  const [category, setCategory] = useState("");

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const categoryToShow = (transactionType === "Expense" ? expenseCategory : incomeCategory)

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
      category,
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            value="Expense"
            checked={transactionType === "Expense"}
            onChange={handleTransactionTypeChange}
          />
          <span className="name">Expense</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            value="Income"
            checked={transactionType === "Income"}
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
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Date"
          className="textInput"
        />
      </div>
      <div className="textInputWrapper">
        <input
          type="time"
          value={time}
          placeholder="Time"
          onChange={handleTimeChange}
          className="textInput"
        />
      </div>
      <div className="textInputWrapper">
        <select
          placeholder="Category"
          value={category}
          onChange={handleCategoryChange}
          className="textInput"
        >
          <option value="">Select a category</option>
          {categoryToShow.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
      </div>

      <button
        type="submit"
        className="submitButton text-center p-2 m-2 bg-green-500 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default Form1;
