import {useState,React} from 'react'
import Daily from '../TaskRecord/labelicon/Daily.png'
import Work from '../TaskRecord/labelicon/Work.png'
import Urgent from '../TaskRecord/labelicon/Urgent.png'
import Reminder from '../TaskRecord/labelicon/Reminder.png'
import Events from '../TaskRecord/labelicon/Events.png'
const TaskEntry = (props) => {
  const categoryToImage = {
    Daily:Daily,
    Work:Work,
    Urgent:Urgent,
    Reminder:Reminder,
    Events:Events,
    // Add more categories and image URLs here
  };

  const categoryImage = categoryToImage[props.category];
  return (
    <div className="Entry cursor-pointer bg-[--body_background] flex m-3 mb-1 mt-1 flex-row w-full rounded-lg">
        <img
        className="category h-8 m-2 sm:h-12 self-start"
        src={categoryImage}
        alt={props.catText}
      />
    </div>
  )
}

export default TaskEntry