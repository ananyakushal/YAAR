import React from 'react'
import Hamburger from '../Hamburger'

function Leftpane() {
  return (
    <div className="Left md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-center items-start ">
      <Hamburger/>
    </div>
  )
}

export default Leftpane