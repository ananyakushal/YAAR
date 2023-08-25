import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file for styling
import { NavLink } from "react-router-dom";
const Sidebar = (props) => {
  const [selectedItem, setSelectedItem] = useState("Record"); // Initial selected item

  return (
    <div className={props.className}>
      <div className="profile-picture m-2 flex flex-row justify-center item-start text-sm md:text-lg">
        {/* Placeholder for profile picture */}
        <img
          className="h-14 m-2 sm:h-16 rounded-full ring-4 ring-offset-[--body_background] ring-offset-4 ring-green-400 "
          src={props.img}
          alt="Profile"
        />
        <h1 className="self-center ml-2">Welcome {props.name} !!</h1>
      </div>
      <ul className="menu cursor-pointer list-none w-full m-3 text-sm md:text-base">
        <NavLink to="/">
          <li
            className={selectedItem === "FinanceRecord" ? "selected" : ""}
            onClick={() => setSelectedItem("FinanceRecord")}
          >
            Finance Record
          </li>
        </NavLink>
        <NavLink to="/Budget">
          <li
            className={selectedItem === "Budget" ? "selected" : ""}
            onClick={() => setSelectedItem("Budget")}
          >
            Budget
          </li>
        </NavLink>
        <NavLink to="/Categories">
          <li
            className={selectedItem === "Categories" ? "selected" : ""}
            onClick={() => setSelectedItem("Categories")}
          >
            Categories
          </li>
        </NavLink>
        <NavLink to="/Analysis">
          <li
            onClick={() => setSelectedItem("Analysis")}
            className={selectedItem === "Analysis" ? "selected" : ""}
          >
            Analysis
          </li>
        </NavLink>
        <hr className="m-3" />
        <NavLink to="/TaskRecord">
          <li
            className={selectedItem === "TaskRecord" ? "selected" : ""}
            onClick={() => setSelectedItem("TaskRecord")}
          >
            Task Record
          </li>
        </NavLink>
        <NavLink to="/Labels">
          <li
            className={selectedItem === "Labels" ? "selected" : ""}
            onClick={() => setSelectedItem("Labels")}
          >
            Labels
          </li>
        </NavLink>
        <NavLink to="/Progress">
          <li
            className={selectedItem === "Progress" ? "selected" : ""}
            onClick={() => setSelectedItem("Progress")}
          >
            Progress
          </li>
        </NavLink>
        {/* <hr className="m-3" />
        <NavLink to="/About">
          <li
            className={selectedItem === "About" ? "selected" : ""}
            onClick={() => setSelectedItem("About")}
          >
            About Us
          </li>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Sidebar;
