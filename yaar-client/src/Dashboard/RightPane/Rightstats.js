import React from "react";

function Rightstats(props) {
  return (
    <div className={props.className}>
      <h1 className="text-lg w-full md:mb-4 text-center md:text-3xl ">Stats</h1>
      <div className="Finance md:ml-3 flex flex-col ">
        <div className="m-1">Expense So Far :</div>
        <div className="m-1">Income So Far :</div>
        <div className="m-1">Total Balance :</div>
        <div className="m-1">Contri to pay :</div>
        <div className="m-1">Contri to receive :</div>
        <div className="m-2 text-lg md:text-3xl">This Month</div>
        <div className="m-1">Income :</div>
        <div className="m-1">Expense :</div>
      </div>
      <hr className="m-3"/>
      <div className="Task flex flex-col md:ml-3">
      <div className="m-1">Tasks So Far :</div>
        <div className="m-1">Completed So Far :</div>
        <div className="m-2 text-lg md:text-3xl">This Month</div>
        <div className="m-1">Tasks Left :</div>
        <div className="m-1">Tasks Completed :</div>
      </div>
    </div>
  );
}

export default Rightstats;
