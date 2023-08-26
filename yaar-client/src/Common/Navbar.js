import React from "react";
import logo from "./Logo.png";
import Darklight from "./ui-mode/darklight";
import Logout from "./Logout";
// import LoginButton from "./LoginButton";

function Navbar() {
  return (
    <div className="Navbar flex justify-between items-center p-0 z-1 ">
      <div className="Logo flex justify-between items-center p-1 mt-2 ml-3 text-xl space-x-2 sm:ml-12 sm:space-x-5 sm:text-3xl">
        <img className="img h-12 mr-2 sm:h-16" src={logo} alt="logo" />
        Money Minded
      </div>
      <div className="uilogin flex justify-between items-center p-2 mt-2 mr-3 sm:mr-12 space-x-3 sm:space-x-5">
        <Darklight />
       <Logout/>
      </div>
    </div>
  );
}
export default Navbar;
