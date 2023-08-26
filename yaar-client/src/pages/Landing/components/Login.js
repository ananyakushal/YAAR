import React from "react";
import { GoogleLogin } from "react-google-login";
import "./Login.css";

const clientId =
  "1095870786788-95qbina3r5vev794bo3s7ebirj5733c5.apps.googleusercontent.com";

function Login({ onLoginClick }) {
  const onSuccess =(res) =>{
    console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
  }
  const onFailure =(res) =>{
    console.log("LOGIN FAILED! res: ",res);
  }
  return (
    <div className="btn rounded-xl h-8 w-16 text-sm p-2 sm:text-lg uppercase sm:h-10 sm:w-20 bg-green-500 hover:bg-green-600 " onClick={onLoginClick}>
      <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn={true}/>
    </div>
  );
}

export default Login;
