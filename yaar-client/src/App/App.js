/* eslint-disable no-unused-vars */
// import Navbar from "../Common/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect } from "react";
import {gapi} from "gapi-script";
import Landing from "../pages/Landing/Landing";

// import { useState } from "react";
// import Logout from "../Common/Logout";
// import Login from "../pages/Landing/components/Login";


const clientId =
  "1095870786788-95qbina3r5vev794bo3s7ebirj5733c5.apps.googleusercontent.com";
function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId , scope :""
      })
    };
    gapi.load('client:auth2' , start);
  });

  return (
    <div className="App overflow-hidden">
      <Landing/>
      <Dashboard />
    </div>
  );
}

export default App;
