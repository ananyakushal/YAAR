/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React from "react";
import Hamburger from "../Hamburger";
import Rightstats from "./Rightstats";
import { useState } from "react";
function Rightpane() {
  const [view, toView] = useState(false);
  return (
    <div className="right md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-start items-center flex-col z-10">
      <button onClick={() => toView(!view)}>
        <Hamburger />
      </button>
      {view ? (
        <Rightstats className="Rightstats flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start align-centre text-left overflow-y-scroll" />
      ) : (
        <Rightstats className="Rightstats hidden md:flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start overflow-y-scroll" />
      )}
    </div>
  );
}

export default Rightpane;
