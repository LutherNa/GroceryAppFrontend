//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import useToken from './Token.js';

function App() {

  const { token, setToken } = useToken();

  return (!token) ? 
    <Register setToken={setToken} />:
    (
      <div className="MainPage">
        Insert main page here plz
      </div>
    )
}

export default App;
