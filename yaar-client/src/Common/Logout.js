import React from "react";
import { GoogleLogout } from "react-google-login";


const clientId =
  "1095870786788-95qbina3r5vev794bo3s7ebirj5733c5.apps.googleusercontent.com";

function Logout({ onLogoutClick }) {
  const onSuccess =(res) =>{
    console.log("Logout SUCCESS!");
  }
  
  return (
    <button className="black-button" onClick={onLogoutClick}>
      <GoogleLogout clientId={clientId} buttonText="Logout" onSuccess={onSuccess}/>
    </button>
  );
}

export default Logout;
