import React from 'react'
import TaskEntry from './TaskEntry';

function TaskRecord() {
  return (
    <div className='Records flex pb-2 mb-2 flex-col items-center justify-start w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      <TaskEntry  taskname="Workout" label="Daily" date="25/12/23" time="05:00pm" />
    </div>
  )
}

export default TaskRecord;