/* eslint-disable no-unused-vars */
// import Navbar from "../Common/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect } from "react";
import {gapi} from "gapi-script";
import Landing from "../pages/Landing/Landing";

// import { useState } from "react";
// import Logout from "../Common/Logout";
// import Login from "../pages/Landing/components/Login";

const token =localStorage.token;

function App() {
  return (
    <div className="App overflow-hidden">
      
      <Dashboard /> :
      <Landing/>
    </div>
  );
}

export default App;
