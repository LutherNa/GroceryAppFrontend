import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';



export default function Locations() {
    const tokenString = sessionStorage.getItem('token');


    return (
        !tokenString ? <Navigate to="/login" /> :
        <>
            <Navbar />
            <h1>Welcome to location!</h1>
        </>
    )
}