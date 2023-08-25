import React from "react";
import { Route, Routes } from "react-router-dom";
import Records from "./FinanceRecord/Records";
import FloatingButton from "../../../Common/CardToEnterDetails/FloatingButton";
import Analysis from "./Analysis/Analysis";
import Budget from "./Budget/Budget";
import Categories from "./Categories/Categories";
import TaskRecord from "./TaskRecord/TaskRecord";
import Labels from "./Labels/Labels";
import Progress from "./Progress/Progress";

function MainArea() {
  return (
    <div className="main md:w-6/12 pb-4 pt-2 pr-1 pl-1 flex flex-col items-center flex-grow-[10] bg-[--body_paper] rounded-lg shadow-xl">
      <Routes>
        <Route path="/" element={<Records />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Analysis" element={<Analysis />} />
        <Route path="/TaskRecord" element={<TaskRecord/>} />
        <Route path="Labels" element={<Labels/>} />
        <Route path="/Progress" element={<Progress/>} />
      </Routes>
        <FloatingButton />
    </div>
  );
}

export default MainArea;
