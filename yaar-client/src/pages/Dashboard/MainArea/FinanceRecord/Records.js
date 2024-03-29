import React, { useEffect, useState } from "react";
// import { sortedExpenses } from '../../../../Api/ExpensesApi';
import { userSortedExpenses } from "../../../../Api/ExpensesApi";
import Entry from "./Entry";
import creditcard from "../FinanceRecord/categoryIcon/creditcard.png";
import { deleteEntry } from "../../../../Api/ExpensesApi";
function Records() {
  const [entryList, setEntryList] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  useEffect(() => {
    // Fetch the entry list from the API when the component mounts
    fetchEntryList();
  }, []);

  const fetchEntryList = async () => {
    try {
      const response = await userSortedExpenses(userId);
      setEntryList(response.expenses);
    } catch (error) {
      console.log("Error in fetchEntryList:", error);
    }
  };
  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteEntry(entryId);
      setEntryList(entryList.filter((entry) => entry._id !== entryId));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };
  // setEntryList(entryList);

  return (
    <div className='Records flex pb-2 mb-2 flex-col items-center justify-start w-full h-full overflow-y-scroll overflow-x-hidden z-0'>
      {/* <Entry category={Food} catText="Food" color="rgb(34 197 94)" payment={creditcard} mode="Canara Bank" amount={500} date="25/12/23" time="05:00pm" /> */}
      {entryList.map((entry) => (
        <Entry
          key={entry._id}
          category={entry.category}
          catText={entry.category}
          color={
            entry.type === "Income" ? "rgb(34 197 94)" : "rgb(248 113 113)"
          }
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
  );
}

export default Records;
