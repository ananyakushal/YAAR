import React, { useEffect } from 'react'
import './PreLoader.css'
import { preLoaderAnim } from '../../animations'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
  return (
    <div className="preLoader">
      <div className="text-container">
        <span><b>Think,</b></span>
        <span><b>Save,</b></span>
        <span><b>Spend</b></span>
      </div>
    </div>
  )
}

export default PreLoader
