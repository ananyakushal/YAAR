import React from "react";
import { useState } from "react";
import Delete from "./Delete";
function Entry(props) {
  const [hovered,showDelete]=useState(false);
  return (
    <div onClick={()=>showDelete(!hovered)} className="Entry cursor-pointer bg-[--body_background] flex m-3 mb-1 mt-1 flex-row w-full rounded-lg">
      {hovered && <Delete/>}
      <img
        className="category h-8 m-2 sm:h-12 self-start"
        src={props.category}
        alt={props.catText}
      />
      <div className="Details flex flex-row ml-1 mr-1 pt-1 h-full w-full justify-between">
        <div className="Title-account flex flex-col">
          <div className="Reason text-sm md:text-lg">{props.catText}</div>
          <div className="Account flex flex-row ">
            <img
              className="Modepic h-4 sm:h-6 self-baseline"
              src={props.payment}
              alt={props.mode}
            />
            <p className="Modename ml-1 text-xs md:text-sm">{props.mode}</p>
          </div>
        </div>
        <div className="Amt-time flex flex-row justify-center items-center mr-1">
          <div className="Amt text-lg md:text-3xl self-center mr-3 md:mr-6" style={{color : props.color}}>{props.amount}</div>
          <div className="Date-time text-xs md:text-sm">
            <p className="Date">{props.date}</p>
            <p className="Time">{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
