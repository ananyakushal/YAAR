// Form1.jsx
import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data or make API calls here
  };
  return (
      <form onSubmit={handleSubmit}>
        <div class="radio-inputs">
          <label class="radio">
            <input
              type="radio"
              value="expense"
              checked={transactionType === "expense"}
              onChange={handleTransactionTypeChange}
            />
            <span class="name">Expense</span>
          </label>
          <label class="radio">
            <input
              type="radio"
              value="income"
              checked={transactionType === "income"}
              onChange={handleTransactionTypeChange}
            />
            <span class="name">Income</span>
          </label>
        </div>
        <div class="textInputWrapper">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            class="textInput"
          />
        </div>
        <div class="textInputWrapper">
          <label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Date"
              class="textInput"
            />
          </label>
        </div>
        <div class="textInputWrapper">
          <label>
            <input
              type="time"
              value={time}
              placeholder="Time"
              onChange={handleTimeChange}
              class="textInput"
            />
          </label>
        </div>
        <div class="textInputWrapper">
          <label>
            <select
              placeholder="Category"
              value={category}
              onChange={handleCategoryChange}
              class="textInput"
            >
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="groceries">Groceries</option>
              <option value="entertainment">Entertainment</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </form>

  );
};

export default Form1;
