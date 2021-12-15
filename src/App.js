//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import useToken from './Token.js';
import {Routes, Route} from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();

  if(!token) return <Register setToken={setToken} />

  return (
    <>
    <h1>YOU MADE IT!</h1>
    </>
  )
}

export default App;

/**
 * (!token) ? 
    <Register setToken={setToken} />:
    (
      <div className="MainPage">
        Insert main page here plz
      </div>
    )
 */