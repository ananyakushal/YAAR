/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  Bar,
  BarChart,
  Cell,
} from "recharts";

import axios from "axios";
import { sortedExpenses } from "../../../../Api/ExpensesApi";

const COLORS = [
  "rgb(255, 99, 132)", // Red
  "rgb(255, 159, 64)", // Orange
  "rgb(255, 205, 86)", // Yellow
  "rgb(75, 192, 192)", // Teal
  "rgb(54, 162, 235)", // Blue
  "rgb(153, 102, 255)", // Purple
];


const COLORS_O = [
  'rgb(231, 76, 60)',    // Alizarin Red
  'rgb(241, 196, 15)',   // Sunflower Yellow
  'rgb(46, 204, 113)',   // Emerald Green
  'rgb(52, 152, 219)',   // Curious Blue
  'rgb(155, 89, 182)',   // Studio Purple
  'rgb(243, 156, 18)',   // Orange Hibiscus
];

const Graph = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await sortedExpenses();
      setExpenses(result.expenses);
    };
    fetchData();
  }, []);

  console.log(expenses);
  const data = [
    { name: "Category A", value: 50 },
    { name: "Category B", value: 30 },
    { name: "Category C", value: 20 },
  ];

  //separte the expenses into categories
  const Expense = expenses.filter((expense) => expense.type === "Expense");
  const Income = expenses.filter((expense) => expense.type === "Income");
  console.log(Expense);
  console.log(Income);

  return (
    <div className='flex flex-col w-full justify-center items-center '>
      <div className='flex w-full flex-row justify-center items-center rounded-lg m-1 p-1 bg-[--body_background] '>
        <div className='flex flex-col w-1/2 items-center round-lg ml-1 mb-2 bg-[--body_background] '>
          {/*  */}
          <PieChart width={375} height={400}>
            <Pie
              dataKey='amount'
              // isAnimationActive={false}
              data={Expense}
              nameKey='category'
              cx={175}
              cy={200}
              outerRadius={120}
              fill='#8884d8'
              label
            >
              {Expense.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <span className="text-center text-3xl mb-2">Expenses Overview</span>
        </div>
        <div className="flex flex-col w-1/2 items-center round-lg mr-1 mb-2 bg-[--body_background]">
          <PieChart width={375} height={400}>
            <Pie
              dataKey='amount'
              // isAnimationActive={false}
              data={Income}
              nameKey='category'
              cx={175}
              cy={200}
              outerRadius={120}
              fill='#8884d8'
              label
            >
              {Income.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_O[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <span className="text-center text-3xl mb-2">Income Overview</span>

        </div>
      </div>

      <div className='flex flex-col'>
        <BarChart width={700} height={400} data={Expense}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
         <Tooltip/>
          <Legend />
          <Bar dataKey='amount' fill='rgb(248 113 113)' />
          {/* <Bar dataKey="category" fill="#82ca9d" /> */}
          {/* <Bar dataKey="type" fill="#82ca9d" /> */}
          {/* <Bar dataKey={Expense.category} fill='#82ca9d' /> */}
        </BarChart>
        <span className="text-center text-3xl mb-2">Expense Flow</span>
      </div>
    </div>
  );
};

export default Graph;
