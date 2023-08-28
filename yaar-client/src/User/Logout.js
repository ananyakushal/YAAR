import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "1095870786788-95qbina3r5vev794bo3s7ebirj5733c5.apps.googleusercontent.com";

function Logout({ onLogoutClick }) {
  const onSuccess = (res) => {
    console.log("Logout SUCCESS!", res);
    onLogoutClick();
  };

  const onFailure = (res) => {
    console.log("Logout FAILED! res: ", res);
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      onLogoutFailure={onFailure}
    />
  );
}

export default Logout;
