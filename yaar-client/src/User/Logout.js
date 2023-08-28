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
    <div className="h-8 w-16 p-1 sm:h-10 sm:w-20">

      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onLogoutFailure={onFailure}
        icon={false}
        className="btn rounded-xl h-8 w-18 text-sm sm:p-1 sm:text-lg uppercase text-center sm:h-10 sm:w-20 bg-green-500 hover:bg-green-600"
        theme="dark"
      />
    </div>
  );
}

export default Logout;
