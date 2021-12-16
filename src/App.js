//import logo from './logo.svg';
import React from 'react';
import Home from './Components/Home.js.js'
import './App.css';
import Login from './Components/Login.js.js';
import Register from './Components/Register.js';
import Locations from './Components/Locations.js';
import GroceryLists from './Components/GroceryLists.js';
import Products from './Components/Products.js';
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
                <Route path="/" element={<Home currentToken={setToken} />} />
                <Route path="/locations" element={<Locations currentToken={setToken} />} />
                <Route path="/products" element={<Products currentToken={setToken} />} />
                <Route path="/grocerylists" element={<GroceryLists currentToken={setToken} />} />
            </Routes>
            );
  };

export default App;