import React from 'react';
import './Login.css';

function Login({ onLoginClick }) {
  return (
    <button className= 'black-button' onClick={onLoginClick}>Login</button>
  );
}

export default Login;