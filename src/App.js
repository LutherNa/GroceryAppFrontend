//import logo from './logo.svg';
import React from 'react';
import Home from './Components/Home'
import Login from './Components/PreLogin/Login';
import Register from './Components/PreLogin/Register';
import Products from './Components/ProductRenderer/Products';
import Locations from './Components/Location/Locations';
import GroceryLists from './Components/GroceryLists';
import useToken from './Models/Token.js';
import {Routes, Route, useRoutes} from 'react-router-dom';


const App = () => {
  //Use token model, See Token.js in Models
  const { token, setToken } = useToken();
  //Returns the user to their desired route based on route information
  return (
            <Routes>
                <Route path="/register" element={<Register setToken={setToken}  />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/" element={<Home />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/products" element={<Products />} />
                <Route path="/grocerylists" element={<GroceryLists />} />
            </Routes>
            );
  };

export default App;