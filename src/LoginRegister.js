//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import useToken from './Token.js';
import {Routes, Route} from 'react-router-dom';

function LoginRegister() {
    
  const { token, setToken } = useToken('');

    return <>
    <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
    </Routes>
    </>
}


