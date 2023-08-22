/* eslint-disable no-unused-vars */
import React from "react";
import Hamburger from "../Hamburger";
import { useState } from "react";
import Sidebar from "../../../Common/Sidebar";
import profile from "../../../Common/1688118865701.jpeg"

function Leftpane() {
  const [view, toView] = useState(false);
  return (
    <div className="Left md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-start items-center flex-col ">
      <button onClick={() => toView(!view)}>
        <Hamburger />
      </button>
      {view ? (
        <Sidebar name="Yashasvi" img={profile} className="flex flex-col items-center justify-start w-full h-full bg-[--body_background] text-[--text_primary] p-1 pl-3 pr-3" />
      ) : (
        <Sidebar name="Yashasvi" img={profile} className="hidden md:flex items-center justify-start flex-col w-full h-full bg-[--body_paper] text-[--text_primary] p-1 pl-3 pr-3" />
      )}
    </div>
  );
}

export default Leftpane;
