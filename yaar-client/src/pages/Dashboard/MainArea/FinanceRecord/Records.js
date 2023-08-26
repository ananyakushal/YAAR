import React, { useEffect, useState } from 'react'
import { getExpenses } from '../../../../Api/ExpensesApi';
import Entry from './Entry'
import cutlery from "./cutlery.png";
import creditcard from "./creditcard.png";
function Records() {

  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    // Fetch the entry list from the API when the component mounts
    fetchEntryList();
  }, []);

 const fetchEntryList = async () => {
    try {
        const response  = await getExpenses();
        setEntryList(response.expenses);
    } catch (error) {
        console.log("Error in fetchEntryList:", error);
    }
  };
  

  return (
    <div className='Records flex pb-2 mb-2 flex-col-reverse items-center justify-start w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      <Entry category={cutlery} catText="Food" color="rgb(34 197 94)" payment={creditcard} mode="Canara Bank" amount={500} date="25/12/23" time="05:00pm" />
      {entryList.map(entry => (
        <Entry
          key={entry._id}
          category={cutlery}
          catText={entry.category}
          color="rgb(34 197 94)"
          payment={creditcard}
          mode={entry.type}
          amount={entry.amount}
          date={entry.date}
          time={entry.time}
          // Pass other entry properties here
        />
      ))}
    </div>
  )
}

export default Records