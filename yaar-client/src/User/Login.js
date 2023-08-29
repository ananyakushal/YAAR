import React from "react";
import { GoogleLogin } from "react-google-login";
// import "./Login.css";

const clientId =
  "1095870786788-95qbina3r5vev794bo3s7ebirj5733c5.apps.googleusercontent.com";

  const userInfo = {};

function Login({ onLoginClick }) {
  const onSuccess =(res) =>{
    // console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
    userInfo.name = res.profileObj.name;
    userInfo.email = res.profileObj.email;
    userInfo.imageUrl = res.profileObj.imageUrl;
    // console.log(userInfo);
    localStorage.setItem("token",res.tokenId);
    localStorage.setItem("name",res.profileObj.name);
    localStorage.setItem("email",res.profileObj.email);
    localStorage.setItem("imageUrl",res.profileObj.imageUrl);
    localStorage.setItem("id",res.profileObj.googleId);
    // console.log("Token Stored");
    // console.log(localStorage);
    window.location.reload();
  }
  const onFailure =(res) =>{
    console.log("LOGIN FAILED! res: ",res);
  }

  return (
    <div className="btn" onClick={onLoginClick}>
      <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn={true} icon={false} theme="dark"/>
    </div>
  );
}
export {userInfo};
export default Login;