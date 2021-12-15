//import logo from './logo.svg';
import React from 'react';
import Home from './Home.js'
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import useToken from './Token.js';
import {Routes, Route, useRoutes} from 'react-router-dom';

const App = () => {
 
    const { token, setToken } = useToken(''); 
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "login", element: <Login setToken={setToken} /> },
      { path: "register", element: <Register setToken={setToken} /> },
    ]);

    if(!token) return <Register setToken={setToken} route="register" path="register" />;
    return routes;
  };

export default App;