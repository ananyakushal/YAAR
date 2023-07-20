import React from 'react'
import Hamburger from '../Hamburger'
import Rightstats from './Rightstats'
function Rightpane() {
  return (
    <div className="right md:w-3/12 flex md:bg-[--body_paper] md:shadow-2xl md:rounded-lg flex-grow justify-center items-start">
        <Hamburger/>
        <Rightstats/>
    </div>
  )
}

export default Rightpane