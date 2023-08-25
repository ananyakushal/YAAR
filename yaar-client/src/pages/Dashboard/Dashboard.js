import React from 'react'
import MainArea from './MainArea/MainArea'
import Leftpane from './LeftPane/Leftpane'
import Rightpane from './RightPane/Rightpane'
import Navbar from '../../Common/Navbar'
function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="dashboard ml-1 mr-1 h-[86vh] pt-4 w-screen flex flex-col mb-5 justify-center items-center overflow-hidden z-1">
      <h1 className="text-xl flex mt-1 mb-4 text-center sm:text-3xl ">My Dashboard</h1>
      <div className="panel flex flex-row h-full w-full space-x-1 pl-3 ">
        <Leftpane/>
        <MainArea/>
        <Rightpane/>
      </div>
    </div>
    </>
  )
}

export default Dashboard 