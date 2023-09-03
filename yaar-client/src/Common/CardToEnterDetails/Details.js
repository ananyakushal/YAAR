import React from "react";
import TabbedForms from "./TabbedForm";
const Details = () => {
  return (
    <div className="bg-[--body_paper] flex flex-col justify-center items-center fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-45%] z-10000 shadow-xl rounded-lg">
      <TabbedForms />
      {/* <button
        className="btn rounded-xl h-8 w-16 text-sm p-1 m-2 sm:text-lg uppercase sm:h-10 sm:w-20 bg-green-500 hover:bg-green-600 "
        onClick={onClose}
      >
        Submit
      </button> */}
    </div>
  );
};

export default Details;
