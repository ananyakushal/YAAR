/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import Dashboard from '../Dashboard/Dashboard';
import styles from './components/style';
import './Landing.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Text1 from './components/Text1';
import Text2 from './components/Text2';
import PreLoader from './components/PreLoader';

function Landing({ styles}) { 
  return (
    <div className='ml-4 mr-4' >
    <PreLoader/>
    {/* <styles/> */}
    <Navbar/>
    <Text1/>
    <Text2/>
    <Footer/>
    
    </div>
  );
}

export default Landing;