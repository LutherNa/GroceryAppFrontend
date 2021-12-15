//import logo from './logo.svg';
import React from 'react';
import Home from './Componenets/Home.js'
import './App.css';
import Login from './Componenets/Login.js';
import Register from './Componenets/Register.js';
import useToken from './Models/Token.js';
import {Routes, Route, useRoutes} from 'react-router-dom';

const App = () => {
  //Use token model, See Token.js in Models
  const { token, setToken } = useToken(''); 

  //Returns the user to their desired route based on route information
  return (
            <Routes>
                <Route path="/register" element={<Register setToken={setToken} />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/" element={<Home currentToken={token} />} />
            </Routes>
            );
  };
//<Route path="/location" element={<Location currentToken={token}/>} />
export default App;