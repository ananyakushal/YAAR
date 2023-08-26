import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;

// import React, { useState } from 'react';
// import Dashboard from '../Dashboard/Dashboard';

// const Button = ({ styles }) => {
//   const [showDashboard, setShowDashboard] = useState(false);

//   const handleButtonClick = () => {
//     setShowDashboard(true);
//   };

//   return (
//     <>
//       {/* Show the button only if the Dashboard is not visible */}
//       {!showDashboard && (
//         <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={handleButtonClick}>
//           Show Dashboard
//         </button>
//       )}

//       {/* Show the Dashboard component if the button has been clicked */}
//       {showDashboard && <Dashboard />}
//     </>
//   );
// };

// export default Button;
