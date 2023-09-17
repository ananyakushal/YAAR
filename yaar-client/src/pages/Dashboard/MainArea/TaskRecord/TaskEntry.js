import { useState, React } from "react";
import Daily from "../TaskRecord/labelicons/Daily.png";
import Work from "../TaskRecord/labelicons/Work.png";
import Urgent from "../TaskRecord/labelicons/Urgent.png";
import Reminder from "../TaskRecord/labelicons/Reminder.png";
import Events from "../TaskRecord/labelicons/Event.png";
const TaskEntry = (props) => {
  const labelToImage = {
    Daily: Daily,
    Work: Work,
    Urgent: Urgent,
    Reminder: Reminder,
    Events: Events,
    // Add more categories and image URLs here
  };

  const labelImage = labelToImage[props.label];
  return (
    <div className="TaskEntry cursor-pointer bg-[--body_background] flex m-3 mb-1 mt-1 flex-row w-full rounded-lg">
      <img
        className="category h-8 m-2 sm:h-12 self-start"
        src={Daily} //put "labelImage"
        alt={props.label}
      />
      <div className="Details flex flex-row ml-1 mr-1 pt-1 h-full w-full justify-between">
        <div className="Title-account flex flex-col">
          <div className="Reason text-sm md:text-lg">{props.taskname}</div>
          <div className="Account flex flex-row ">
            <p className="Modename text-xs md:text-sm">{props.label}</p>
          </div>
        </div>
        <div className="Amt-time flex flex-row justify-center items-center mr-1">
          <div className="Date-time text-xs md:text-sm">
            <p className="text-center Date text-[0.5rem] md:text-base">
              {props.date}
            </p>
            <p className="Time text-center text-[0.5rem] md:text-base">
              {props.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskEntry;
