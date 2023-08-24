import React from 'react'
import Entry from './Entry'
import cutlery from "./cutlery.png";
import creditcard from "./creditcard.png";
function Records() {
  return (
    <div className='Records flex pb-2 mb-2 flex-col items-center justify-start w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      <Entry category={cutlery} catText="Food" color="rgb(34 197 94)" payment={creditcard} mode="Canara Bank" amount={500} date="25/12/23" time="05:00pm" />
      
    </div>
  )
}

export default Records