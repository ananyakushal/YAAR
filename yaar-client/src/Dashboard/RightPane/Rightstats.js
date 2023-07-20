import React from "react";

function Rightstats() {
  return (
    <div className="Rightstats hidden md:flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start ">
      <h1 className="text-xl w-full mb-4 text-center sm:text-3xl ">Stats</h1>
      <div className="Finance ml-3 flex flex-col ">
        <div className="m-1">Expense So Far :</div>
        <div className="m-1">Income So Far :</div>
        <div className="m-1">Total Balance :</div>
        <div className="m-1">Contri to pay :</div>
        <div className="m-1">Contri to receive :</div>
        <div className="m-2 text-2xl">This Month</div>
        <div className="m-1">Income :</div>
        <div className="m-1">Expense :</div>
      </div>
      <hr className="m-3"/>
      <div className="Task flex flex-col ml-3">
      <div className="m-1">Tasks So Far :</div>
        <div className="m-1">Completed So Far :</div>
        <div className="m-2 text-2xl">This Month</div>
        <div className="m-1">Tasks Left :</div>
        <div className="m-1">Tasks Completed :</div>
      </div>
    </div>
  );
}

export default Rightstats;
