import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';



import axios from "axios";



const Graph = () => {


    const fetchExpenses = async () => {
        try {
          const response = await axios.get("http://localhost:3005/api/expenses");
          return response.data.expenses;
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
        console.log(expenses);
        
    
            

    
    const data = [
        {
          name: 'Food',
          amount: 4000,
        },
        {
          name: 'party',
          amount: 3000,
        },
        {
          name: 'Travel',
          amount: 2000,
        },
        {
          name: 'Shopping',
          amount: 2780,
        },
        {
          name: 'Bills',
          amount: 1890,
        },
        {
          name: 'Others',
          amount: 2390,
        },
    ];

        const data01 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
            { name: 'Group E', value: 278 },
            { name: 'Group F', value: 189 },
          ];


  return (
<LineChart
          width={800}
          height={600}
          data={expenses}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
  );
};

export default Graph;