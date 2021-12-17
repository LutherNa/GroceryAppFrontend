import React from 'react';
import {Navigate} from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';



export default function Home() {
    const tokenString = sessionStorage.getItem('token');

    
    return (
        !tokenString ? <Navigate to="/login" /> :
        <>
            <Navbar />
            <h1>Welcome Home!</h1>
        </>
    )
}