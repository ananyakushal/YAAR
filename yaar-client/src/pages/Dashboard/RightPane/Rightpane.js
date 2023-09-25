/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React from "react";
import Hamburger from "../Hamburger";
import Rightstats from "./Rightstats";
import { useState, useEffect } from "react";
import { userSortedExpenses } from "../../../Api/ExpensesApi";
import { userSortedTask } from "../../../Api/TasksApi";




function Rightpane() {

  const id = localStorage.getItem('id');

  const fetchExpenses = async () => {
    try {
      const response = await userSortedExpenses(id);
      return response.expenses;
    } catch (error) {
      console.error("Error fetching expenses:", error);
      return [];
    }
  };

    const [expenses, setExpenses] = useState([]);   
    useEffect(() => {
        const fetchExpensesList = async () => {
            const expensesList = await fetchExpenses();
            setExpenses(expensesList);
        };
        fetchExpensesList();
    }, []);
    // console.log("expense from rp",expenses);

    const [totalExpenses, setTotalExpense] = useState(0);
    useEffect(() => {
      const totalExpenses = expenses.reduce((total, expense) => {
        // return total + expense.amount;
        if (expense.type === "Expense") {
          return total + expense.amount;
        }
        return total
      }, 0);
      setTotalExpense(totalExpenses);
    }, [expenses]);
    
    const TE = totalExpenses;

    const [totalIncome, setTotalIncome] = useState(0);
    useEffect(() => {
      const totalIncome = expenses.reduce((total, expense) => {
        if (expense.type === "Income") {
          return total + expense.amount;
        }
        return total;
      }, 0);
      setTotalIncome(totalIncome);
    }, [expenses]);

    const TI = totalIncome;
    const Balance = TI - TE;
    
    const fetchTasks = async () => {
      try {
        const response = await userSortedTask(id);
        return response.tasks;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
      }
    }
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      const fetchTasksList = async () => {
        const tasksList = await fetchTasks();
        setTasks(tasksList);
      };
      fetchTasksList();
    }, []);
    // console.log(tasks.length);
    
    
    


  const [view, toView] = useState(false);
  return (
    <div className="right md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-start items-center flex-col z-10 overflow-x-hidden">
      <button onClick={() => toView(!view)}>
        <Hamburger />
      </button>
      {view ? (
        <Rightstats className="Rightstats flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start align-centre text-left overflow-x-hidden overflow-y-scroll " totalExpense={TE} totalIncome={TI} totalBalance={Balance}  totalTasks={tasks.length}/>
      ) : (
        <Rightstats className="Rightstats overflow-x-hidden md:overflow-y-hidden hidden md:flex flex-col h-[95%] w-full text-xs md:text-sm lg:text-base mt-2 mb-4 justify-start" totalExpense={TE} totalIncome={TI} totalBalance={Balance}   totalTasks={tasks.length}/>
      )}
    </div>
  );
}

export default Rightpane;
