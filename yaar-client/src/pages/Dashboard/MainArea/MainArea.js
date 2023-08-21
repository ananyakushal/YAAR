import React from "react";
import Records from "./Budget/Records";
import FloatingButton from "../../../Common/CardToEnterDetails/FloatingButton";


function MainArea() {
  return (
    <div className="main md:w-6/12 pb-4 pt-2 pr-1 pl-1 flex flex-col items-center flex-grow-[10] bg-[--body_paper] rounded-lg shadow-xl">
      
      <Records />
      <div className="flex items-end justify-end w-full relative z-10"> 
        <FloatingButton/>
      </div>
    </div>
  );
}

export default MainArea;
