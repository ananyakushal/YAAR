/* eslint-disable no-unused-vars */
import React from "react";

const Delete = ({onDelete}) => {
    const handleDeleteClick = () => {
      onDelete(); // Call the onDelete function passed as a prop
    };
  
  return <button className="delete-button w-1/3 md:text-lg rounded-lg h-full pl-1 md:p-21text-center bg-red-500 text-white" onClick={handleDeleteClick} >Delete</button>;
};

export default Delete;
