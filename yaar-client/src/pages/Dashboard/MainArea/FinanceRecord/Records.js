import React, { useEffect, useState } from 'react'
import { sortedExpenses } from '../../../../Api/ExpensesApi';
import Entry from './Entry'
import cutlery from "./cutlery.png";
import creditcard from "./creditcard.png";
import { deleteEntry } from '../../../../Api/ExpensesApi';
function Records() {

  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    // Fetch the entry list from the API when the component mounts
    fetchEntryList();
  }, []);

 const fetchEntryList = async () => {
    try {
        const response  = await sortedExpenses();
        setEntryList(response.expenses);
    } catch (error) {
        console.log("Error in fetchEntryList:", error);
    }
  };
  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteEntry(entryId);
      setEntryList(entryList.filter(entry => entry._id !== entryId));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };
  // setEntryList(entryList);


  return (
    <div className='Records flex pb-2 mb-2 flex-col-reverse items-center justify-end w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      {/* <Entry category={cutlery} catText="Food" color="rgb(34 197 94)" payment={creditcard} mode="Canara Bank" amount={500} date="25/12/23" time="05:00pm" /> */}
      {entryList.map(entry => (
        <Entry
          key={entry._id}
          category={cutlery}
          catText={entry.category}
          color={entry.type === "income"? "rgb(34 197 94)" : "rgb(255 0 0)" }
          payment={creditcard}
          mode={entry.type}
          amount={entry.amount}
          date={entry.date}
          time={entry.time}
          onDelete={() => handleDeleteEntry(entry._id)}
          // Pass other entry properties here
        />
      ))}
    </div>
  )
}

export default Records