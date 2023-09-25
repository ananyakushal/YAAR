/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */

import React, { useState } from "react";

import { addTask } from "../../Api/TasksApi";
import "./Card.css";
const Form2 = () => {
  let dateValue = new Date();
  let day = dateValue.getDate();
  let month = dateValue.getMonth() + 1;
  let year = dateValue.getFullYear();
  let minute = dateValue.getMinutes();
  let hour = dateValue.getHours();

  const taskLabel = ["Work", "Daily", "Events", "Reminder", "Urgent"];

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

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(year + "-" + month + "-" + day);
  const [time, setTime] = useState(hour + ":" + minute);
  const [label, setLabel] = useState("");
  const id = localStorage.getItem("id");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionData = {
      task,
      date,
      time,
      label,
      id,
      description
    };

    try {
      await addTask(transactionData);
      setTask("");
      setDate("");
      setTime("");
      setLabel("");
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
      <div className="textInputWrapper">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Task Name"
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
          placeholder="label"
          value={label}
          onChange={handleLabelChange}
          className="textInput"
        >
          <option value="">Select a label</option>
          {taskLabel.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="textInputWrapper">
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="textInput resize overflow-scroll"
        />
      </div> */}
      <button
        type="submit"
        className="submitButton text-center p-2 m-2 bg-green-500 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default Form2;
