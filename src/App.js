//import logo from './logo.svg';
import React from 'react';
import Home from './Home.js'
import './App.css';
import Login from './Componenets/Login.js';
import Register from './Componenets/Register.js';
import useToken from './Token.js';
import {Routes, Route, useRoutes} from 'react-router-dom';

const App = () => {
 
    const { token, setToken } = useToken(''); 
  //  let routes = useRoutes([
  //    { path: "/", element: <Home /> },
  //    { path: "./login", element: <Login setToken={setToken} /> },
  //    { path: "register", element: <Register setToken={setToken} /> },
  //  ]);

  //Demo
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