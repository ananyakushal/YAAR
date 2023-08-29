import React from "react";
import "./Sidebar.css"; // Import your CSS file for styling
import { NavLink } from "react-router-dom";
const Sidebar = (props) => {


  return (
    <div className={props.className}>
      <div className="profile-picture m-2 flex flex-row justify-center item-start text-sm md:text-lg">
        {/* Placeholder for profile picture */}
        <img
          className="h-10 m-2 md:h-16 rounded-full ring-4 ring-offset-[--body_background] ring-offset-4 ring-green-400 "
          src={props.img}
          alt="Profile"
        />
        <h1 className="self-center ml-2">Welcome {props.name} !!</h1>
      </div>
      <ul className="menu cursor-pointer list-none w-full m-1 md:m-3 text-xs md:text-base">
        <NavLink to="/">
          <li>Finance Record</li>
        </NavLink>
        <NavLink to="/Budget">
          <li>Budget</li>
        </NavLink>
        <NavLink to="/Categories">
          <li>Categories</li>
        </NavLink>
        <NavLink to="/Analysis">
          <li>Analysis</li>
        </NavLink>
        <hr className="m-3" />
        <NavLink to="/TaskRecord">
          <li>Task Record</li>
        </NavLink>
        <NavLink to="/Labels">
          <li>Labels</li>
        </NavLink>
        <NavLink to="/Progress">
          <li>Progress</li>
        </NavLink>
        {/* <hr className="m-3" />
        <NavLink to="/About">
          <li
         
          >
            About Us
          </li>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Sidebar;
