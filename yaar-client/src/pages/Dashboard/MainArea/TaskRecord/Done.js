/* eslint-disable no-undef */
import React from 'react'

function Done({onDone}) {
    const handleDoneClick = () => {
        onDone(); // Call the onDelete function passed as a prop
      };
    
  return (
        <button className="delete-button w-1/3 md:text-lg rounded-lg h-full pl-1 md:p-21text-center bg-blue-400 text-white" onClick={handleDoneClick}>Done</button>
  )
}

export default Done