import React, { useState } from 'react';
// import Dashboard from '../Dashboard/Dashboard';
import styles from './style';
import './Landing.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Text1 from './Text1';
import Text2 from './Text2';

function Landing({ styles}) { 
  return (
    <>
    {/* <styles/> */}
    <Navbar/>
    <Text1/>
    <Text2/>
    <Footer/>
    
    </>
  );
}

export default Landing;