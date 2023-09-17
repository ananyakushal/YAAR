import React from 'react'
import TaskEntry from './TaskEntry';
import { useEffect , useState } from 'react';
import { userSortedTask } from '../../../../Api/TasksApi';
import { deleteTask } from '../../../../Api/TasksApi';
function TaskRecord() {
  const [entryList, setEntryList] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  useEffect(() => {
    // Fetch the entry list from the API when the component mounts
    fetchEntryList();
  }, []);

  const fetchEntryList = async () => {
    try {
      const response = await userSortedTask(userId);
      setEntryList(response.tasks);
    } catch (error) {
      console.log("Error in fetchEntryList:", error);
    }
  };
  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteTask(entryId);
      setEntryList(entryList.filter((entry) => entry._id !== entryId));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };
  // setEntryList(entryList);

  return (
    <div className='Records flex pb-2 mb-2 flex-col items-center justify-start w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      {/* <TaskEntry  taskname="Workout" label="Daily" date="25/12/23" time="05:00pm" /> */}
      {entryList.map((entry) => (
        <TaskEntry
          key={entry.id}
          taskname={entry.name}
          label={entry.label}
          date={entry.date}
          time={entry.time}
          onDelete={() => handleDeleteEntry(entry._id)}
          // Pass other entry properties here
        />
      ))}
    </div>
  )
}

export default TaskRecord;