import React from 'react'
import Record from './Records/Record'

function MainArea() {
  return (
    <div className="main md:w-6/12 pt-2 pr-3 pl-3 flex flex-col items-center flex-grow-[10] bg-[--body_paper] rounded-lg shadow-xl overflow-y-scroll overflow-x-hidden">
      <Record/>
      <Record/>
    </div>
  )
}

export default MainArea