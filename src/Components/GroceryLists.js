import React from 'react';
import {Navigate} from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';


export default function GroceryLists() {
    const tokenString = sessionStorage.getItem('token');
    const locationString = sessionStorage.getItem('locationId');
    const pageAccess = tokenString && locationString;


    return (
        !pageAccess ? <Navigate to="/login" /> :
        <>
            <Navbar />
            <h1>Welcome to Grocery Lists!</h1>
        </>
    )
}