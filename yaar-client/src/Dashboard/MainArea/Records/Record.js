import React from "react";
import cutlery from "./cutlery.png";
import creditcard from "./creditcard.png";
function Record() {
  return (
    <div className="Record bg-[--body_background] flex m-3 mb-1 mt-1 flex-row w-full rounded-lg">
      <img
        className="category h-8 m-2 sm:h-12 self-start"
        src={cutlery}
        alt="food"
      />
      <div className="Details flex flex-row ml-1 mr-1 pt-1 h-full w-full justify-between">
        <div className="Title-account flex flex-col">
          <div className="Reason text-sm md:text-lg">Food</div>
          <div className="Account flex flex-row ">
            <img
              className="Modepic h-4 sm:h-6 self-baseline"
              src={creditcard}
              alt="mode"
            />
            <p className="Modename ml-1 text-xs md:text-sm">Canara Bank</p>
          </div>
        </div>
        <div className="Amt-time flex flex-row justify-center items-center mr-1">
          <div className="Amt text-lg md:text-3xl self-center mr-3 md:mr-6 text-green-500">+30</div>
          <div className="Date-time text-xs md:text-sm">
            <p className="Date">12/07/23</p>
            <p className="Time">05:44pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
