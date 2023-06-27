import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";
import Darklight from "../ui-mode/darklight";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Name">
        <img src={logo} alt="logo" />
        Money Minded
      </div>
      <div className="Rest">
        <Darklight />
        <button class="btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
