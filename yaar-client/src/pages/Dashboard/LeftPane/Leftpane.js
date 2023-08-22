/* eslint-disable no-unused-vars */
import React from 'react'
import Hamburger from '../Hamburger'
import { useState } from "react";
import Rightstats from '../RightPane/Rightstats';
function Leftpane() {
  const [view,toView]=useState(false);
  return (
    <div className="Left md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-start items-center flex-col ">
      <button onClick={()=>toView(!view)}><Hamburger/></button>
      {view ? (
        <Rightstats className="Rightstats flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start align-centre z-1 text-left " />
      ) : (
        <Rightstats className="Rightstats hidden md:flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start" />
      )}
    </div>
  )
}

export default Leftpane
